import Nav from "../Nav.jsx";

import Pagination from "./Pagination.jsx";
import Footer from "../Footer.jsx";

export default function Blog({blogs}) {
    return (
        <>
            <Nav curPage="Blog"/>
            <div className="h-[75px]"></div>
            <Pagination blogs={blogs} />
            <span className="mb-36"></span>
            <Footer />
        </>
    );
}
