import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <h1>Welcome to Edcatus!</h1>
      <h2>Bridging education with e-commerce</h2>
      <Link to="/catalogue">Resource Catalogue</Link>
    </>
  );
}

export default Homepage;
