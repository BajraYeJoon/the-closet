import { useState } from "react";

import {
  //createAuthUserWithEmailAndPassword,
  ////createUserDocFromAuth,
  signInWithGooglePopup,
  /// signInWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetField = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);

      resetField(defaultFormField);
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and pasword</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
