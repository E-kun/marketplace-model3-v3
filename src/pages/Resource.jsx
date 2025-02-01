import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { css } from "@emotion/css";

import { useResources } from "../features/resources/useResources";
import { useDeleteResource } from "../features/resources/useDeleteResource";
import { useUserSession } from "../features/users/useUserSession";
import { useRegion } from "../features/contexts/RegionContext";

import CustomButton from "../components/ui/CustomButton";
import { ResourceListing } from "../components/styled_components/resource/ResourceListing";
import { ResourceImageThumbnail } from "../components/styled_components/resource/ResourceImageThumbnail";
import { ResourceDetails } from "../components/styled_components/resource/ResourceDetails";
import { ResourceGallery } from "../components/styled_components/resource/ResourceGallery";
import { ResourceGalleryImage } from "../components/styled_components/resource/ResourceGalleryImage";

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
              color="secondary"
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
      {/* <ResourceGallery>
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
      </ResourceGallery> */}
    </>
  );
}

export default Resource;
