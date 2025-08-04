import { useEffect } from "react";
import { Container, Card } from "react-bootstrap";

export default function Checkout({ clearCart }) {

    useEffect(() => {
        clearCart(); 
    }, []);

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Thank You!</Card.Title>
                    <Card.Text>
                        Your purchase was successful. Enjoy the game!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}