import { Card } from "react-bootstrap";

export default function Staff({ name, role }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{role}</Card.Text>
      </Card.Body>
    </Card>
  );
}