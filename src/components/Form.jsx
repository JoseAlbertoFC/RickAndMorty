import { useState } from "react"
import Styled from "styled-components"
import { useNavigate } from "react-router-dom";

const radius = "5px";

const TextField = Styled.input`
  border: 1px solid green;
  width: 200px;
  border-radius: ${radius};
  padding: 10px;
  &:last-child {
    margin-top: 20px;
  }
`;

const FormWrapper = Styled.div`
 border: 2px solid black;
 background-color: #fff;
 width: 250px;
 margin: auto;
 padding: 20px;
 border-radius: ${radius};
`;

const SubmitButton = Styled.input`
  width: 100px;
  margin-top: 20px;
  border-radius: ${radius};
  border: 2px solid #4e15fa;
  background-color: #fff;
  padding: 5px 0;
  transition: 0.15s all;
  &:hover {
    color: #fff;
    background-color: #4e15fa;
  }
`;

const validatePasswordRegex = /^(?=.*\d).{6,10}$/;

const validateEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;


export default function Form({ onSearch }) {
   const [formData, setFormData] = useState({ email: "", password: "" });
   const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((_formData) => ({
      ..._formData,
      [event.target.name]: event.target.value
    }));
  };

  const validatePassword = (str) => {
    return validatePasswordRegex.test(str);
  };

  const validateEmail = (str) => {
    return validateEmailRegex.test(str);
  };

  const handleFormSubmit = () => {
    const isValidPassword = validatePassword(formData.password);
    const isValidEmail = validateEmail(formData.email);
    if (isValidPassword && isValidEmail) {
      navigate("/home");
    } else {
      alert("Wrong Email or Password");
    }
  };
  

   return (
    <FormWrapper> 
      <form> 
        <label name="email">Email</label>
        <TextField onChange={handleChange} label="email" placeholder="Email" type="email" name="email" />

        <br />

        <label name="password">Password</label>
        <TextField onChange={handleChange} label="password" placeholder="Insert password" type="password" name="password" />
        <br />

        <SubmitButton type="button" onClick={handleFormSubmit} value="Log In" />
      </form> 
    </FormWrapper>
   );
}
