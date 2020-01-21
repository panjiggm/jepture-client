import React from "react";

import Form from "./Form";
import Social from "./Social";

const Login = () => {
  return (
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand">
              <img
                src="data:image/png;base64,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"
                alt="logo"
                width="100"
                className="shadow-light rounded-circle"
              />
            </div>
            <div className="card card-primary">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <Form />
                <Social />
              </div>
            </div>
            <div className="mt-5 text-muted text-center">
              Don't have an account? <a href="auth-register.html">Create One</a>
            </div>
            <div className="simple-footer">Copyright &copy; Jepture 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
