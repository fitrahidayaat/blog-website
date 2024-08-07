import BlogCard from "./BlogCard.jsx";
// import BLOGS from "../../data/blogs.js";
import { useState } from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Pagination({ blogs }) {
    const [page, setPage] = useState(1);
    const visibleBlogs = blogs.slice((page - 1) * 4, page * 4);
    const totalPage = Math.ceil(blogs.length / 4);
    const totalPageArray = Array.from(
        { length: totalPage },
        (_, index) => index + 1
    );

    let paginationButton;

    function handlePageChange(newPage) {
        if (newPage < 1 || newPage > totalPage) return;
        else if (newPage === "<") setPage((prevPage) => prevPage - 1);
        else if (newPage === ">") setPage((prevPage) => prevPage + 1);
        else setPage(newPage);
    }

    if (totalPage === 1) {
        paginationButton = (
            <>
                <button
                    className={`hover:underline ${
                        page === 1 ? "underline" : ""
                    }`}
                >
                    1
                </button>
            </>
        );
    } else if (totalPage > 5) {
        if (page <= 3) {
            paginationButton = (
                <>
                    {totalPageArray.slice(0, 5).map((_, index) => (
                        <button
                            className={`hover:underline ${
                                page === index + 1
                                    ? "underline text-gray-200"
                                    : ""
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                            key={index}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <p>...</p>
                    <button
                        className={`hover:underline ${
                            page === totalPage ? "underline text-gray-200" : ""
                        }`}
                        onClick={() => handlePageChange(totalPage)}
                    >
                        {totalPage}
                    </button>

                    {page < totalPage && (
                        <button
                            className={`hover:underline`}
                            onClick={() => handlePageChange(">")}
                        >
                            &gt;
                        </button>
                    )}
                </>
            );
        } else if (page >= totalPage - 2) {
            paginationButton = (
                <>
                    {page > 1 && (
                        <button
                            className={`hover:underline`}
                            onClick={() => handlePageChange("<")}
                        >
                            &lt;
                        </button>
                    )}

                    <button
                        className={`hover:underline ${
                            page === 1 ? "underline text-gray-200" : ""
                        }`}
                        onClick={() => handlePageChange(1)}
                    >
                        1
                    </button>
                    <p>...</p>
                    {totalPageArray.slice(totalPage - 5).map((_, index) => (
                        <button
                            className={`hover:underline ${
                                page === totalPage - 4
                                    ? "underline text-gray-200"
                                    : ""
                            }`}
                            onClick={() =>
                                handlePageChange(index + totalPage - 5 + 1)
                            }
                            key={index}
                        >
                            {index + totalPage - 5 + 1}
                        </button>
                    ))}
                </>
            );
        } else {
            paginationButton = (
                <>
                    {page > 1 && (
                        <button
                            className={`hover:underline`}
                            onClick={() => handlePageChange("<")}
                        >
                            &lt;
                        </button>
                    )}
                    <button
                        className={`hover:underline ${
                            page === 1 ? "underline text-gray-200" : ""
                        }`}
                        onClick={() => handlePageChange(1)}
                    >
                        1
                    </button>
                    <p>...</p>
                    {totalPageArray
                        .slice(page - 3, page + 2)
                        .map((_, index) => (
                            <button
                                className={`hover:underline ${
                                    page === index + page - 2
                                        ? "underline text-gray-200"
                                        : ""
                                }`}
                                onClick={() =>
                                    handlePageChange(index + page - 3 + 1)
                                }
                                key={index}
                            >
                                {index + page - 3 + 1}
                            </button>
                        ))}
                    <p>...</p>
                    <button
                        className={`hover:underline ${
                            page === totalPage ? "underline text-gray-200" : ""
                        }`}
                        onClick={() => handlePageChange(totalPage)}
                    >
                        {totalPage}
                    </button>

                    {page < totalPage && (
                        <button
                            className={`hover:underline`}
                            onClick={() => handlePageChange(">")}
                        >
                            &gt;
                        </button>
                    )}
                </>
            );
        }
    } else if (totalPage > 0) {
        paginationButton = (
            <>
                {page > 1 && (
                    <button
                        className={`hover:underline`}
                        onClick={() => handlePageChange("<")}
                    >
                        &lt;
                    </button>
                )}

                {totalPageArray.map((_, index) => (
                    <button
                        className={`hover:underline ${
                            page === index + 1 ? "underline text-gray-200" : ""
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                        key={index}
                    >
                        {index + 1}
                    </button>
                ))}

                {page < totalPage && (
                    <button
                        className={`hover:underline`}
                        onClick={() => handlePageChange(">")}
                    >
                        &gt;
                    </button>
                )}
            </>
        );
    }

    const ref = useRef(null);
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
        gsap.from(ref.current, {
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        });

        gsap.to(ref.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
        });
    });

    return (
        <div
            className="py-16 px-10 lg:px-12 xl:px-14 flex flex-col items-center"
            ref={ref}
        >
            <h1 className="text-center text-6xl font-bold">Blog</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-24">
                {visibleBlogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        id={blog.id}
                        title={blog.title}
                        image={blog.img}
                        subtitle={blog.subtitle}
                        author={blog.author}
                        date={blog.date}
                    />
                ))}
            </div>

            <div className="justify-center flex gap-10 text-3xl">
                {paginationButton}
            </div>
        </div>
    );
}
