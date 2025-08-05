import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

export default function Players() {
    return (
        <Container className="mt-5">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title as="h1">Meet the Team</Card.Title>
                    <Card.Img
                        className="my-3"
                        width="750"
                        src="https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2025%2F3%2F8%2F250308MBB-2265.jpg&type=webp"
                        alt="Huddle between five Badger players"
                    />
                    <Card.Text className="fs-5">
                        Get to know the players and coaches behind the scenes.
                    </Card.Text>
                    <h3 className="mt-4">
                        <Link to="/roster" className="btn btn-outline-primary me-3">View the Roster</Link>
                        <Link to="/coaches" className="btn btn-outline-secondary">Meet the Staff</Link>
                    </h3>
                </Card.Body>
            </Card>
        </Container>
    );
}