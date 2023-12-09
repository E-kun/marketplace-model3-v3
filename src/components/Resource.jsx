import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Footer from "./Footer";

import styled from "@emotion/styled";
import { css } from "@emotion/css";

function Resource() {
  const { id } = useParams();

  const ResourceListing = styled.div`
    margin: 2em auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100vh;
    background-color: #eee7e7;
    padding: 1rem;
    /* box-shadow: -2px 2px 5px; */
  `;

  const ResourceImageThumbnail = styled.img`
    width: 50%;
    height: 50%;
    margin: 2rem;
  `;

  const ResourceGallery = styled.ul`
    margin: 2em auto;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    overflow-x: auto;
  `;

  const ResourceGalleryImage = styled.img`
    width: 200px;
    height: 150px;
  `;

  const ResourceDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  // const { resource } = useSelector((store) => store.resource);
  const [resource, setResource] = useState({});

  const imageList = ["1", "2", "3", "4", "5", "6", "7"];

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
      <ResourceListing>
        <ResourceImageThumbnail
          src="/pexels-anni-roenkae-2156881.jpg"
          alt="Resource Image"
        />
        <ResourceDetails>
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <h4>Resource Description</h4>
            <p>{description}</p>
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
            <h4>Created On: {createdAt}</h4>
          </div>
          <div>
            <h4>Author: John Smith</h4>
          </div>
        </ResourceDetails>
      </ResourceListing>
      <ResourceGallery>
        {imageList.map((image) => (
          <li
            key={image}
            className={css`
              padding: 5px;
              border: 30px black;
              background-color: white;
              &:hover {
                border-color: blue;
              }
            `}
          >
            <ResourceGalleryImage
              src="/pexels-anni-roenkae-2156881.jpg"
              alt={image}
            />
          </li>
        ))}
      </ResourceGallery>
      <Footer />
    </>
  );
}

export default Resource;
