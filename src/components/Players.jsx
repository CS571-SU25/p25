
import { Link } from 'react-router-dom';

export default function Players() {

    return <div>
        <h1>Meet the Team!</h1>
        <img width="750" src="https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2025%2F3%2F8%2F250308MBB-2265.jpg&type=webp"></img>
        <h2>
            <Link to="/stats">Click here to check player stats</Link>
        </h2>
        <h2>
            <Link to="/jerseys">Click here to view jerseys</Link>
        </h2>
        {/* Player list will go here */}
    </div>
    
}