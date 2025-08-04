import { Card, Button } from "react-bootstrap";
import TicketInfo from "./TicketInfo";
import { useNavigate } from "react-router-dom";

export default function Games(props) {

    const navigate = useNavigate();

    function handleBuy() {
        const encodedOpponent = encodeURIComponent(props.opponent);
        const encodedDate = encodeURIComponent(props.date);
        const encodedPrice = encodeURIComponent(props.price);
        navigate(`/tickets/info/${encodedOpponent}/${encodedDate}/${encodedPrice}`);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.opponent}</Card.Title>
                <Card.Text>
                    <strong>Date:</strong> {props.date}<br />
                    <strong>Price:</strong> ${props.price}
                </Card.Text>
                <Button variant="primary" onClick={handleBuy}>
                    Buy Tickets
                </Button>
            </Card.Body>
        </Card>
    );
}