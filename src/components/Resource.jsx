import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router";

function Resource() {
  const { id } = useParams();
  const [resource, setResource] = useState({});

  useEffect(
    function () {
      async function fetchResources() {
        try {
          const res = await fetch(
            `https://6562f1caee04015769a6a775.mockapi.io/resources/${id}`
          );
          const data = await res.json();
          setResource(data);
        } catch {
          throw new Error("There was an issue retrieving resources");
        }
      }
      fetchResources();
    },
    [id]
  );

  const { createdAt, name, description, price, subject, type } = resource;

  return (
    <>
      <Navbar />
      <div>
        <h4>Resource ID: {id}</h4>
      </div>
      <div>
        <h4>Resource Name: {name}</h4>
      </div>
      <div>
        <h4>Resource Description: {description}</h4>
      </div>
      <div>
        <h4>Subject: {subject}</h4>
      </div>
      <div>
        <h4>Resource Type: {type}</h4>
      </div>
      <div>
        <h4>Price: ${price}</h4>
      </div>
      <div>
        <h4>Resource Created: {createdAt}</h4>
      </div>
    </>
  );
}

export default Resource;
