import ResourceItem from "./ResourceItem";
import styles from "./ResourceList.module.css";

import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { useResources } from "../features/resources/useResources";
import { useSearchParams } from "react-router-dom";
import { useFilter } from "../features/resources/useFilter";

const ResourceListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  flex: 1;
`;

function ResourceList() {
  const { isLoading, resources } = useResources();
  const { subjects } = useFilter();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.toString().split("&") || "all";
  console.log(filterValue);
  // console.log(subjects);
  // console.log(resources);

  let filteredResources = resources;
  let filter = { subject_id: "", level: "", file_type: "" };
  if (filterValue[0] === "") {
    filteredResources = resources;
  } else {
    filter.subject_id = filterValue[0].split("=")[1];
    filter.level = filterValue[1].split("=")[1];
    filter.file_type = filterValue[2].split("=")[1];
    // console.log(filter);
    if (filter.subject !== "") {
      filteredResources = resources.filter(
        (resource) => resource.subject_id === filter.subject_id
      );
    }
  }

  searchParams.delete("subject_id");
  searchParams.delete("level");
  searchParams.delete("file_type");
  // } else{
  //   filteredResources = resources.filter((resource) => resource.file_type)
  // }
  if (isLoading) return <CircularProgress />;

  return (
    <ResourceListBox>
      <ul className={styles.resourceList}>
        {filteredResources.map((resource) => (
          <ResourceItem resource={resource} key={resource.id} />
        ))}
      </ul>
    </ResourceListBox>
  );
}

export default ResourceList;
