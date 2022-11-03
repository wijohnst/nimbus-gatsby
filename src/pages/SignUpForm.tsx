import React from "react";
import styled from "styled-components";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const FormWrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  margin: 0.5em 0 2em 0;
  position: relative;
  right: 20px;

  @media (max-width: 500px) {
    width: 65%;
    right: 10px;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  border: none;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 1.25rem;
  font-family: "Roboto", serif;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin: 0.5em 0 2em 0;
`;

const SignUpButton = styled.button<{
  isActive: boolean;
}>`
  opacity: ${(props) => (props.isActive ? "100%" : "50%")};
  border: none;
  text-decoration: none;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isActive ? "2px 2px rgba(0, 0, 0, 0.25)" : "none"};
  position: relative;
  left: 20px;
  background-color: #096b72;
  color: #f1e3e4;
  font-family: "Lora", serif;
  font-weight: 500;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
    left: 13px;
  }
`;

const ErrorMessage = styled.span`
  color: darkred;
  font-family: "Roboto", sans-serif;
  margin: 0.25rem 0 0 0.25rem;
`;

const SignUpForm = () => {
  const [emailValue, setEmailValue] = React.useState<string>();
  const [isSubmitActive, setIsSubmitActive] = React.useState<boolean>(false);
  const [emailHasError, setEmailHasError] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === "") {
      setIsSubmitActive(false);
      setEmailHasError(false);
    }

    setEmailValue(event.target.value);
  };

  React.useEffect(() => {
    if (emailValue && emailValue !== "") {
      setIsSubmitActive(true);
    }
  }, [emailValue]);

  const handleEmailSubmit = (
    event: React.ChangeEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (isSubmitActive && emailValue) {
      const isEmailValid: boolean = emailRegex.test(emailValue);
      if (isEmailValid) {
        setEmailHasError(false);
        console.log(`Valid email: ${emailValue}`);
      } else {
        setEmailHasError(true);
      }
    }
  };

  return (
    <FormWrapper
      name="contact"
      // onSubmit={handleEmailSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <EmailInput
        type="email"
        placeholder="Please enter your email address"
        onChange={(event) => handleChange(event)}
      />
      {emailHasError && (
        <ErrorMessage>Please enter a valid email address.</ErrorMessage>
      )}
      <ButtonWrapper>
        <input type="hidden" name="form-name" value="contact" />
        <SignUpButton isActive={isSubmitActive} type="submit">
          Tell Me More!
        </SignUpButton>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default SignUpForm;
