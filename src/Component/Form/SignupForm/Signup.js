import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
// Auth
import { useAuth } from "../../../Context/AuthContext";

// CSS
import { Form, Button, Alert, Card } from "react-bootstrap";

const Signup = () => {
  // State
  const [setError, SetErrorState] = useState("");
  const [setMessage, SetMessageState] = useState("");
  const [setLoading, SetLoadingState] = useState(false);

  // Ref
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  // Auth
  const { signup } = useAuth();

  // Event Handler
  async function handleSubmit(event) {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return SetErrorState("Please Try Again. Passowrds Do Not Match!");
    }
    try {
      SetErrorState("");
      SetLoadingState(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      SetMessageState("Signed Up Successfully");
      history.push("/login");
    } catch {
      SetErrorState("Failed To Sign Up. Please, Try Again");
    }
    SetLoadingState(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {setError && <Alert variant="danger">{setError}</Alert>}
          {setMessage && <Alert variant="success">{setMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={setLoading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
