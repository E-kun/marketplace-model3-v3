import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

function UpdateResource() {
  const [resourceName, setResourceName] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div>
      <Navbar />
      <form>
        <div>
          <label htmlFor="resourceName">Resource Name</label>
          <input
            type="text"
            id="resourceName"
            onChange={(e) => setResourceName(e.target.value)}
            value={resourceName}
          ></input>
        </div>
        <div>
          <label htmlFor="resourceDescription">Resource Description</label>
          <input
            type="text"
            id="resourceDescription"
            onChange={(e) => setResourceDescription(e.target.value)}
            value={resourceDescription}
          ></input>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          >
            <option selected>Select a subject</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          ></input>
        </div>
        <div>
          <Button>Create Resource</Button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default UpdateResource;
