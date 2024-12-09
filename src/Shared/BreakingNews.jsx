import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex gap-2 text-center border p-6  bg-gray-100 rounded-md">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link className="mr-16">             Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link className="mr-16">             Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link className="mr-16">             Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link className="mr-16">             Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
</Marquee>
        </div>
        
    );
};

export default BreakingNews;