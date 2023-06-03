import styled from "@emotion/styled";

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  border-radius: 10px;
  padding: 10px;
  background-color: lightblue;
  
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

&:hover {
  background-color: darkgrey;
  }
`;

