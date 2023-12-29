import { useNavigate, useParams } from "react-router";

import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useResources } from "../features/resources/useResources";
import { useDeleteResource } from "../features/resources/useDeleteResource";
import { Paper } from "@mui/material";
import CustomButton from "./CustomButton";
import { useUserSession } from "../features/users/useUserSession";
import { Link } from "react-router-dom";
import { useRegion } from "../features/contexts/RegionContext";

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

function Resource() {
  const { region } = useRegion();
  const { user, isAuthenticated } = useUserSession();
  const { resourceId } = useParams();
  const { resources } = useResources();
  const { isDeleting, deleteResource } = useDeleteResource();
  const navigate = useNavigate();

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
    images,
    files,
  } = filteredResource[0];

  let currency = "";

  switch (region) {
    case "malaysia":
      currency = "MYR";
      break;
    case "brunei":
      currency = "BND";
      break;
    case "singapore":
      currency = "SGD";
      break;
    case "indonesia":
      currency = "IDR";
      break;
    default:
      break;
  }

  function handleEditButton() {
    navigate(`/updateResource/${id}`, { replace: true });
  }

  return (
    <>
      <ResourceListing>
        <ResourceImageThumbnail src={images[0]} alt="Resource Image" />
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
            <h4>
              {currency}
              {price}
            </h4>
          </div>
          <div>
            <h4>Created On: {created_at}</h4>
          </div>
          <div>
            <h4>Author: {author}</h4>
          </div>
        </ResourceDetails>
      </ResourceListing>
      {isAuthenticated &&
        user.user_metadata.firstName + " " + user.user_metadata.lastName ===
          author && (
          <>
            <CustomButton
              disabled={isDeleting}
              onClick={() => {}}
              variant="contained"
              color="primary"
            >
              <Link to={files[0]}>Retrieve Resource Files</Link>
            </CustomButton>
            <CustomButton
              disabled={isDeleting}
              onClick={handleEditButton}
              variant="contained"
              color="primary"
            >
              Update Resource
            </CustomButton>
            <CustomButton
              disabled={isDeleting}
              onClick={() => deleteResource(resourceId)}
              variant="contained"
              color="error"
            >
              Delete Resource
            </CustomButton>
          </>
        )}
      <ResourceGallery>
        {images.map((image) => (
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
            <ResourceGalleryImage src={image} alt={image} />
          </li>
        ))}
      </ResourceGallery>
    </>
  );
}

export default Resource;
