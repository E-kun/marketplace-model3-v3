import ResourceItem from "./ResourceItem";
import styles from "./ResourceList.module.css";

import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { useResources } from "../features/resources/useResources";
import { useFilter } from "../features/resources/useFilter";

const ResourceListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  flex: 1;
`;

function ResourceList({ filterValues }) {
  const { isLoading, resources } = useResources();
  const { subjects } = useFilter();

  let filteredResources = resources;
  let minPrice = 0;
  let maxPrice = 0;
  let filter = {
    filteredPrice: "",
    filteredSubject: "",
    filteredLevel: "",
    filteredType: "",
  };

  //Price, subject, level, type
  if (filterValues.some((value) => value !== "")) {
    filterValues.forEach((value, index) => {
      if (value !== undefined) {
        switch (index) {
          case 0:
            filter.filteredPrice = value;
            break;
          case 1:
            filter.filteredSubject = value;
            break;
          case 2:
            filter.filteredLevel = value;
            break;
          case 3:
            filter.filteredType = value;
            break;
          default:
            console.log("Not a filter value");
        }
      }
    });
    for (const [fType, fValue] of Object.entries(filter)) {
      // console.log(fType, fValue);
      if (fType === "filteredPrice") {
        if (fValue === "low_price") {
          minPrice = 1;
          maxPrice = 20;
        } else if (fValue === "medium_price") {
          minPrice = 21;
          maxPrice = 50;
        } else if (fValue === "high_price") {
          minPrice = 51;
          maxPrice = 100;
        } else {
          continue;
        }

        filteredResources = filteredResources.filter(
          (resource) => minPrice <= resource.price && resource.price <= maxPrice
        );
      }
      if (fType === "filteredSubject") {
        if (fValue !== "") {
          filteredResources = filteredResources.filter(
            (resource) => resource.subject_id === fValue
          );
        } else {
          continue;
        }
      }
      if (fType === "filteredLevel") {
        if (fValue !== "") {
          filteredResources = filteredResources.filter(
            (resource) => resource.level === fValue
          );
        } else {
          continue;
        }
      }
      if (fType === "filteredType") {
        if (fValue !== "") {
          filteredResources = filteredResources.filter(
            (resource) => resource.file_type === fValue
          );
        } else {
          continue;
        }
      }
    }
  } else {
    console.log("No filter");
  }

  if (isLoading) return <CircularProgress />;

  return (
    <ResourceListBox>
      {filteredResources.length > 0 ? (
        <ul className={styles.resourceList}>
          {filteredResources.map((resource) => (
            <ResourceItem resource={resource} key={resource.id} />
          ))}
        </ul>
      ) : (
        <h2>There are currently no resources for this filtered search.</h2>
      )}
    </ResourceListBox>
  );
}

export default ResourceList;
