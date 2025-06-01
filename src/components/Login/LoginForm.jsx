import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    console.log("Login submitted", values);
    navigate("/home");
  };

  return (
    <div className="limiter">
      <Container fluid className="container-login100">
        <Row className="wrap-login100">
          {/* Right - Illustration Section */}
          <Col
            md={8}
            className="login100-more d-none d-md-block"
            style={{
              backgroundImage: `url('/images/bg-01.png')`,
              backgroundSize: "cover",
            }}
          ></Col>
          {/* Left - Form Section */}
          <Col md={4} className="p-5">
            <h2 className="mb-4">
              <strong>Sign In</strong>
            </h2>
            <p>
              New user?
              <Link to="/" className="px-3" style={{ color: "blue" }}>
                Create new account
              </Link>
            </p>
            <Formik
              initialValues={{ email: "", password: "", remember: false }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <BootstrapForm.Group
                    className="mb-3 mt-2"
                    controlId="formEmail"
                  >
                    <BootstrapForm.Label>
                      Email or User name
                    </BootstrapForm.Label>
                    <Field
                      name="email"
                      type="email"
                      as={BootstrapForm.Control}
                      isInvalid={<ErrorMessage name="email" />}
                    />
                    <ErrorMessage
                      name="email"
                      component={BootstrapForm.Control.Feedback}
                      type="invalid"
                    />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group
                    className="mb-3"
                    controlId="formPassword"
                  >
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field name="password">
                      {({ field, meta }) => (
                        <>
                          <InputGroup>
                            <BootstrapForm.Control
                              {...field}
                              type={showPassword ? "text" : "password"}
                              // placeholder="Password"
                              isInvalid={meta.touched && meta.error}
                              className="form-control"
                            />
                            {/* <InputGroup.Text
                              onClick={() => setShowPassword((prev) => !prev)}
                              style={{ cursor: "pointer" ,width: '10px'}}
                              // className="form-control sm"
                            >
                              <i
                                className={`fa ${
                                  showPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                              ></i>
                            </InputGroup.Text> */}
                          </InputGroup>

                          {meta.touched && meta.error && (
                            <div className="invalid-feedback d-block">
                              {meta.error}
                            </div>
                          )}
                        </>
                      )}
                    </Field>
                  </BootstrapForm.Group>

                  <BootstrapForm.Group
                    className="mb-3"
                    controlId="formRemember"
                  >
                    <Field
                      type="checkbox"
                      name="remember"
                      as={BootstrapForm.Check}
                      label="keep me signed in"
                      className="px-3"
                    />
                  </BootstrapForm.Group>

                  <div className="d-flex justify-content-between mb-3">
                    <a href="#" className="txt1">
                      Forgot Password?
                    </a>
                  </div>

                  <Button variant="dark" type="submit" className="w-100 mb-3">
                    Sign In
                  </Button>

                  <div className="separator">
                    <span className="separator-text">or sign in using</span>
                  </div>

                  {/* <div className="d-flex justify-content-center gap-4" style={{ gap: '10px' }}>
                    <Button variant="primary" className="rounded-circle">
                      <i className="fa fa-facebook-f"></i>
                    </Button>
                    <Button
                      variant="info"
                      className="rounded-circle text-white"
                    >
                      <i className="fa fa-twitter"></i>
                    </Button>
                  </div> */}
                  <div
                    className="d-flex justify-content-center gap-4 mt-3"
                    style={{ gap: "40px" }}
                  >
                    {["google", "facebook", "linkedin", "twitter"].map(
                      (platform) => (
                        <Button
                          key={platform}
                          variant="outline-dark"
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <i
                            className={`fa fa-${
                              platform === "google" ? "google" : platform
                            }`}
                          ></i>
                        </Button>
                      )
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
