import Header from "./Header";
import { Container, Card } from "react-bootstrap";

export default function Home() {
    return (
        <Container className="mt-5">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title as="h1">Welcome to Wisconsin Badgers Basketball</Card.Title>
                    <Card.Img
                        className="my-3"
                        src="https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2025%2F3%2F9%2F241115MBB-1017-Huddle.JPG&type=webp"
                        alt="Photo of a huddle of the Wisconsin Basketball team"
                        style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                    <Card.Text className="fs-5">
                        Explore the full team roster, upcoming schedule, and official gear.
                        Get tickets and show your support for the Badgers!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}