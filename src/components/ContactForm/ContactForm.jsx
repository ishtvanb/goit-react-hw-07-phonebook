import { Formik, Field, getIn } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import {
  Form,
  FormField,
  Cover,
  Input,
  FormLabel,
  ErrorMessage,
  FormButton,
  PersonIcon,
  PhoneIcon,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

const ContactSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  phone: Yup.string().phone('UA').required('Phone number is required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function getStyles(errors, touched, fieldName) {
    if (getIn(errors, fieldName) && getIn(touched, fieldName)) {
      return {
        borderColor: 'red',
      };
    }
    return {};
  }

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}

      validationSchema={ContactSchema}
        onSubmit={({ ...values }, actions) => {
          const existingContact = contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          );
          if (existingContact) {
            toast.error(
              `You already have ${existingContact.name} in your contacts!`
            );
            actions.resetForm();
          } else {
            dispatch(addContact({ ...values }));
            actions.resetForm();
          }
        }}
      >
      {formikProps => (
        <Form>
          <FormField>
            <FormLabel htmlFor="name">Name</FormLabel>
              <Cover>
                <Field
                  name="name"
                  render={({ field }) => (
                    <Input 
                      {...field}
                      placeholder="your name"
                      id="name"
                      style={getStyles(
                      formikProps.errors,
                      formikProps.touched,
                      'name'
                      )}
                     />
                    )}
                  />
                <PersonIcon />
              </Cover>
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="name">Number</FormLabel>
           <Cover>
                <Field
                  name="phone"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="+38-0XX-XXX-XX-XX"
                      id="number"
                      style={getStyles(
                        formikProps.errors,
                        formikProps.touched,
                        'phone'
                        )}
                      />
                     )}
                  />
            <PhoneIcon />
          </Cover>
          <ErrorMessage name="phone" component="div" />
        </FormField>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
      )}
      </Formik>
    </>
  );
};

export default ContactForm;
