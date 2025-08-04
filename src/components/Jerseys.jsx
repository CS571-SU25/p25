
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const JERSEY_PRICE = 99.99;
const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function Jerseys({ addToCart }) {
    const { name } = useParams();
    const [size, setSize] = useState("M");
    const navigate = useNavigate();

    function handleAddToCart() {
        addToCart({
            type: "jersey",
            player: decodeURIComponent(name),
            size,
            price: JERSEY_PRICE,
            quantity: 1
        });
        alert("Jersey added to cart!");
        return;
    }

    return (
        <Container className="mt-4">
            <Button variant="secondary" className="mb-3" onClick={() => navigate("/roster")}>
                ← Back to Roster
            </Button>
            <Card>
                <Card.Body>
                    <Card.Title>Purchase Jersey for {decodeURIComponent(name)}</Card.Title>
                    <img width="250" src="https://images.footballfanatics.com/wisconsin-badgers/mens-under-armour-white-wisconsin-badgers-replica-basketball-jersey_pi5025000_ff_5025825-677e05443daded754096_full.jpg?_hv=2" alt="a Wisconsin basketball jersey"/>
                    <Card.Text>
                        <strong>Price:</strong> ${JERSEY_PRICE}
                    </Card.Text>
                    <Form>
                        <Form.Group>
                            <Form.Label>Select Size</Form.Label>
                            <Form.Select value={size} onChange={(e) => setSize(e.target.value)}>
                                {SIZES.map((s, i) => <option key={i} value={s}>{s}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Button className="mt-3" variant="success" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}