import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to="/catalogue">Resource Catalogue</Link>
    </main>
  );
}

export default Homepage;
