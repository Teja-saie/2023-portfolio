import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>
          The page you are looking for might be in another castle. But don't worry, you can always go back
          <Link to="/">Home</Link>.
        </p>
      </div>
    );
  };