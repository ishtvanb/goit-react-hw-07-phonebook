import React from 'react';
import Wrapper from './Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import Loader from './Loader';
import { PrimaryTitle, SecondaryTitle } from './Wrapper/Wrapper.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <Wrapper>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Wrapper>
  );
};

