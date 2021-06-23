import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <Form className="my-4">
        <Form.Group className="my-3">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="password"
            required
          />
        </Form.Group>
        <Button className="my-3" variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Already have an account
        <Link to="/login">
          <Button variant="info" size="sm" className="mx-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
