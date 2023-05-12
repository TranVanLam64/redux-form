import { Field, reduxForm } from "redux-form";

const LoginForm = (props: { handleSubmit: any }) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        className="loginInput"
        name="email"
        type="text"
        placeholder="Email Address"
        component="input"
      />
      <Field
        className="loginInput"
        name="password"
        type="password"
        placeholder="Password"
        component="input"
      />
      <button type="submit" className="btnLogin">
        Login
      </button>
    </form>
  );
};

export default reduxForm({
  form: "loginForm",
})(LoginForm);
