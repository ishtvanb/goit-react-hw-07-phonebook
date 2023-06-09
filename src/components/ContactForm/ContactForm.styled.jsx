import styled from '@emotion/styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiPhoneLine } from 'react-icons/ri';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  background-color: lightblue;

  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  border-radius: 7px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const FormLabel = styled.label`
margin-bottom: 10px;
`;

export const Cover = styled.div`
position: relative;
&:focus-within {
    svg {
      transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
      fill: yellowgreen;
    }
  }
`;

export const PersonIcon  = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const PhoneIcon  = styled(RiPhoneLine)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  height: 30px;
  width: 88%;
  padding-left: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 7px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);
  background-color: limegreen;
`;
