import { useParams } from "react-router";

import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useResources } from "../features/resources/useResources";
import { useDeleteResource } from "../features/resources/useDeleteResource";
import { Paper } from "@mui/material";
import CustomButton from "./CustomButton";

const ResourceListing = styled(Paper)`
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

const imageList = ["1", "2", "3", "4", "5", "6", "7"];

function Resource() {
  const { resourceId } = useParams();
  const { resources } = useResources();
  const { isDeleting, deleteResource } = useDeleteResource();

  let filteredResource = resources.filter(
    (resource) => resource.id === resourceId
  );

  const {
    id,
    created_at,
    name,
    description,
    price,
    subject,
    file_type: type,
    author,
  } = filteredResource[0];

  // console.log(filteredResource[0]);

  return (
    <>
      <ResourceListing>
        <ResourceImageThumbnail
          src="/pexels-anni-roenkae-2156881.jpg"
          alt="Resource Image"
        />
        <ResourceDetails>
          <div>
            {/* <h2>Test Resource</h2> */}
            <h2>{name}</h2>
          </div>
          <div>
            <h4>Resource Description</h4>
            {/* <p>Test Description</p> */}
            <p>{description}</p>
          </div>
          <div>
            <h4>Subject: {subject}</h4>
            {/* <h4>Subject: Subject</h4> */}
          </div>
          <div>
            {/* <h4>Resource Type: PDF</h4> */}
            <h4>Resource Type: {type}</h4>
          </div>
          <div>
            <h4>RM{price}</h4>
            {/* <h4>RM10</h4> */}
          </div>
          <div>
            <h4>Created On: {created_at}</h4>
            {/* <h4>Created On: Current Date</h4> */}
          </div>
          <div>
            <h4>Author: {author}</h4>
            {/* <h4>Author: John Smith</h4> */}
          </div>
        </ResourceDetails>
      </ResourceListing>
      <CustomButton
        disabled={isDeleting}
        handleClick={() => deleteResource(resourceId)}
        variant="contained"
        color="error"
      >
        Delete Resource
      </CustomButton>
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
    </>
  );
}

export default Resource;
