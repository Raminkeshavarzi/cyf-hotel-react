import React, { useContext, useRef, useState } from "react";
import { useAuth } from "../../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
// Css
import { Form, Button, Card, Alert } from "react-bootstrap";

const Update = () => {
  // State
  const [setError, setErrorState] = useState("");
  const [setMessage, setMessageState] = useState("");
  const [setLoading, setLoadingState] = useState(false);

  // Ref
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  // Auth
  const { setCurrentUser, updateEmail, updatePassword } = useAuth();

  // Handler
  function handleSubmit(event) {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErrorState("Passwords do not match");
    }
    const promises = [];
    setLoadingState(true);
    setErrorState("");

    // if (emailRef.current.value !== setCurrentUser.email) {
    //     promises.push(updateEmail(emailRef.current.value))
    // }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/loged-in/home");
      })
      .catch(error => {
        setErrorState(error.message);
      })
      .finally(() => {
        setLoadingState(false);
      });
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {setError && <Alert variant="danger">{setError}</Alert>}
          {setMessage && <Alert variant="success">{setMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                // defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={setLoading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/loged-in/home">Cancel</Link>
      </div>
    </div>
  );
};

export default Update;
