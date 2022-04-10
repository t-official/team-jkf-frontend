import React from "react";
import { Container, Card } from "react-bootstrap";

const PasswordResetDone = () => {
  return (
    <Container className="m-5 mx-auto d-flex flex-column ">
      <Card
        style={{ maxWidth: "30rem" }}
        className="m-5 mx-auto d-flex flex-column p-4  align-items-center shadow border-0 text-center"
      >
        <div>
          <div>
            <span style={{ fontSize: "4em", color: "#20B2AA" }}>
              <i className="fa-solid fa-circle-check"></i>
            </span>
          </div>
          <div>
            <h4>We have emailed you instructions to reset your password</h4>
            <p>
              If an account exists with the email you entered. You will receive
              the token.
            </p>
            <p>
              <i>
                If you don't receive an email. Check your spam folder or make
                sure you entered the correct email.
              </i>
            </p>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default PasswordResetDone;
