import React, { useContext, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

// CSS
import { Card, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  // State
  const [setError, SetErrorState] = useState("");
  const [setMessage, SetMessageState] = useState("");
  const [setLoading, SetLoadingState] = useState(false);
  // Ref
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  // Auth
  const { signin } = useAuth();

  // Handler
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      SetErrorState("");
      SetLoadingState(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      SetMessageState("Signed In SuccessFully");
      history.push("/loged-in/home/");
    } catch {
      SetErrorState("Faild To Log In. Please Check Your Password Or Email!");
    }
    SetLoadingState(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {setError && <Alert variant="danger">{setError}</Alert>}
          {setMessage && <Alert variant="Success">{setMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={setLoading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
