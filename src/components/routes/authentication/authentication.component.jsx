import // createUserDocFromAuth,
// signInWithGooglePopup,
"../../../utils/firebase/firebase.utils";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div>
      <h1>Sign in page</h1>
      <div className="float-container" style={{ display: "flex" }}>
        <SignInForm />

        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
