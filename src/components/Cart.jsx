import { Container, Card, ListGroup, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, clearCart, removeFromCart }) {
    const navigate = useNavigate();
    const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    function handleCheckout() {
        navigate("/checkout");
    }

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Your Cart</Card.Title>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                             <ListGroup>
                                {cart.map((item, idx) => (
                                    <ListGroup.Item key={idx}>
                                        <Row>
                                            <Col>
                                                {item.type === "jersey" ? (
                                                    <>
                                                        1 Jersey for <strong>{item.player}</strong> (Size: {item.size}) — ${item.price}
                                                    </>
                                                ) : (
                                                    <>
                                                        {item.quantity} ticket(s) for <strong>{item.opponent}</strong> on {item.date} — ${item.price} each
                                                    </>
                                                )}
                                            </Col>
                                            <Col xs="auto">
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => removeFromCart(idx)}
                                                >
                                                    Remove
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <h5 className="mt-3">Total: ${totalCost.toFixed(2)}</h5>
                            <Button variant="danger" className="mt-2" onClick={clearCart}>
                                Clear Cart
                            </Button>
                            <br />
                            <Button className="mt-3" variant="success" onClick={handleCheckout}>
                                Checkout
                            </Button>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}