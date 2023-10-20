import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/Fwb9xFG/error-page-not-found-vector-27898543.jpg" alt="" />
            <Link to='/' className="text-6xl text-green-600 underline">Go Home</Link>
        </div>
    );
};

export default ErrorPage;