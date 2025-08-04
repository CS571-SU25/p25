import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

export default function TicketInfo({ addToCart }) {
    const { opponent, date, price } = useParams();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const total = quantity * parseFloat(price);

    function handlePurchase() {
        addToCart({
            opponent: decodeURIComponent(opponent),
            date: decodeURIComponent(date),
            price: parseFloat(price),
            quantity
        });
        alert("Tickets added to cart");
    }

    return (
        <Container className="mt-4">
            <Button variant="secondary" className="mb-3" onClick={() => navigate("/tickets")}>
                ← Back to Tickets
            </Button>
            <Card>
                <Card.Body>
                    <Card.Title>Purchase Tickets</Card.Title>
                    <Card.Text>
                        <strong>Opponent:</strong> {decodeURIComponent(opponent)}<br />
                        <strong>Date:</strong> {decodeURIComponent(date)} <br />
                        <strong>Price per Ticket:</strong> ${price}
                    </Card.Text>
                    <Form>
                        <Form.Group controlId="ticketQuantity">
                            <Form.Label>Select Quantity (4 Max)</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={4}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Form.Group>
                        <p className="mt-2"><strong>Total:</strong> ${total}</p>
                        <Button className="mt-3" variant="success" onClick={handlePurchase}>
                            Add to Cart
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}