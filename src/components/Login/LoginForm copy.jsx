import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container, Form as BootstrapForm } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../../assets/style/Login.css'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),

  password: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain at least one special character"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // You can implement actual login logic here
          console.log("Login successful:", values);
          navigate("/home");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <Field
                type="email"
                name="email"
                className="form-control"
              />
              <div className="text-danger">
                <ErrorMessage name="email" />
              </div>
            </BootstrapForm.Group>

            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Password</BootstrapForm.Label>
              <Field
                type="password"
                name="password"
                className="form-control"
              />
              <div className="text-danger">
                <ErrorMessage name="password" />
              </div>
            </BootstrapForm.Group> */}
            <div class="login-container">
              <h2>Sign In</h2>
              <p>
                New user? <a href="/register">Create an account</a>
              </p>

              <form>
                <input type="text" placeholder="Username or email" required />
                <input type="password" placeholder="Password" required />

                <div class="checkbox">
                  <input type="checkbox" id="keepSignedIn" />
                  <label for="keepSignedIn">Keep me signed in</label>
                </div>

                <button type="submit">Sign In</button>

                <div class="social-login">
                  <hr />
                  <span>Or Sign In With</span>
                  <hr />
                  <div class="icons">
                    <button>
                      <i class="fab fa-google"></i>
                    </button>
                    <button>
                      <i class="fab fa-facebook-f"></i>
                    </button>
                    <button>
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                    <button>
                      <i class="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
