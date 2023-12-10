import ResourceItem from "./ResourceItem";
import styles from "./ResourceList.module.css";

import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { useResources } from "../features/resources/useResources";

const ResourceListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  flex: 1;
`;

function ResourceList() {
  const { isLoading, resources } = useResources();

  if (isLoading) return <CircularProgress />;

  return (
    <ResourceListBox>
      <ul className={styles.resourceList}>
        {resources.map((resource) => (
          <ResourceItem resource={resource} key={resource.id} />
        ))}
      </ul>
    </ResourceListBox>
  );
}

export default ResourceList;
