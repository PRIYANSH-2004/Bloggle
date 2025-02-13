import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostList from "../components/PostList"
const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            {/* BREADCRUMB */}
            <div className="flex gap-4">
                <Link to='/'>Home</Link>
                <span>•</span>
                <span className="text-blue-800">Blogs and Article</span>
            </div>
            {/* INTRODUCTION */}
            <div className="flex items-center justify-between">
                {/* titles */}
                <div className="">
                    <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                    <p className="mt-8 text-md md:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quidem sint minima praesentium, 
                    </p>
                </div>
                {/* animated button */}
                <Link to='write' className="relative hidden md:block">
                <svg viewBox="0 0 200 200"
                width="200"
                height="200"
                className="text-lg tracking-widest animate-spin animatedButton"
                >
                    <path
                    id="circlePath"
                    d = "M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
                    fill="none"
                    />
                    <text>
                        <textPath href="#circlePath" startOffset="0%">Write your story.</textPath>
                        <textPath href="#circlePath" startOffset="50%">Share your Idea.</textPath>
                    </text>

                </svg>
                <button className="absolute top-0 left-0 right-0 bottom-0 m-auto h-20 w-20  rounded-full flex items-center justify-center">
                <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 336.945 336.945" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M51.478,80.57h170.667c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H51.478c-4.142,0-7.5,3.357-7.5,7.5 S47.336,80.57,51.478,80.57z"></path> <path d="M51.478,112.914h189.334c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H51.478c-4.142,0-7.5,3.357-7.5,7.5 S47.336,112.914,51.478,112.914z"></path> <path d="M324.624,121.053c-9.939-9.938-25.9-10.268-36.242-0.994V7.5c0-4.143-3.357-7.5-7.5-7.5H12.109 c-4.142,0-7.5,3.357-7.5,7.5v321.945c0,4.143,3.358,7.5,7.5,7.5h268.772c4.143,0,7.5-3.357,7.5-7.5V194.59l36.119-36.119 c0.02-0.02,0.035-0.041,0.054-0.06c0.023-0.022,0.048-0.041,0.07-0.063C334.906,148.065,334.906,131.335,324.624,121.053z M19.609,321.945V15h253.772v120l-28.69,28.691c-1.133-0.688-2.457-1.09-3.879-1.09H51.478c-4.142,0-7.5,3.357-7.5,7.5 s3.358,7.5,7.5,7.5H230.78l-17.344,17.344H51.478c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h146.958l-17.344,17.344H51.478 c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h114.615l-13.797,13.797c-0.203,0.203-0.388,0.416-0.563,0.635 c-0.045,0.058-0.086,0.119-0.13,0.178c-0.129,0.172-0.252,0.347-0.364,0.527c-0.042,0.067-0.082,0.137-0.122,0.206 c-0.109,0.187-0.208,0.378-0.3,0.571c-0.019,0.041-0.043,0.077-0.062,0.118l-1.226,2.735c-1.234-0.893-2.746-1.424-4.384-1.424 H51.478c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h91.965l-9.657,21.539c-0.173,0.387-0.305,0.783-0.409,1.184 c-1.959,4.168-1.232,9.297,2.206,12.734c2.123,2.124,4.945,3.293,7.949,3.293c1.705,0,3.346-0.389,4.84-1.104 c0.382-0.103,0.761-0.226,1.129-0.391l37.853-16.968c0.039-0.018,0.074-0.041,0.112-0.06c0.198-0.092,0.393-0.193,0.583-0.305 c0.066-0.038,0.132-0.076,0.196-0.116c0.187-0.116,0.368-0.242,0.546-0.376c0.052-0.04,0.107-0.076,0.159-0.117 c0.221-0.176,0.436-0.362,0.64-0.566l83.791-83.791v112.357H19.609z M171.287,285.685l-19.569,8.772 c-0.082-0.087-0.154-0.179-0.238-0.264c-0.084-0.084-0.175-0.156-0.261-0.237l8.773-19.567L171.287,285.685z M184.287,277.471 l-16.081-16.081L292.51,137.086l16.081,16.081L184.287,277.471z M317.297,140.659l-12.278-12.278 c3.223-0.271,6.538,0.818,8.999,3.279C316.479,134.12,317.567,137.437,317.297,140.659z"></path> <path d="M51.478,145.258h160c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-160c-4.142,0-7.5,3.357-7.5,7.5 S47.336,145.258,51.478,145.258z"></path> </g> </g> </g> </g></svg>
                </button>
                </Link>
            </div>
            {/* CATEGORIES */}
            <MainCategories/>
            {/* FEATURED POST */}
            <FeaturedPosts/>
            {/* POST LIST */}
            <div className="">
                <h1 className="my-8 text-2xl text-gray-600">Recent Post</h1>
                <PostList/>
            </div>
        </div>
    )
}
export default Homepage