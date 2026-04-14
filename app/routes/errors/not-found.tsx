import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
      <h1 className="text-6xl font-bold text-blue-400 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-300 text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="block bg-blue-600 text-white px-7 py-2 hover:bg-blue-700 transition rounded"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
