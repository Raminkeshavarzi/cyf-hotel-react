import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Css
import { Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../../Context/AuthContext";

const Reset = () => {
  // State
  const [setError, SetErrorState] = useState("");
  const [setMessage, SetMessageState] = useState("");
  const [setLoading, SetLoadingState] = useState(false);
  // Ref
  const emailRef = useRef();
  // Auth
  const { resetPassword } = useAuth();

  // Handler
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      SetErrorState("");
      SetLoadingState(true);
      SetMessageState("The Password Recovery Link Sent To Your Email! ");
    } catch {
      SetErrorState("Email Does Not Exist! Please Check Again.");
      SetMessageState("");
    }
    SetLoadingState(false);
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {setError && <Alert variant="danger">{setError}</Alert>}
          {setMessage && <Alert variant="success">{setMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={setLoading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Reset;
