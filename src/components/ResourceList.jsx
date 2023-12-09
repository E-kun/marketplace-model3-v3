import { useDispatch, useSelector } from "react-redux";
import ResourceItem from "./ResourceItem";
// import { getResources } from "../features/resources/resourceSlice";
import { useEffect, useState } from "react";
import styles from "./ResourceList.module.css";

import styled from "@emotion/styled";
import Spinner from "./Spinner";

const ResourceListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  flex: 1;
`;

function ResourceList() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // const { isLoading } = useSelector((store) => store.resource);

  useEffect(function () {
    // dispatch(setIsLoading());
    setIsLoading(true);

    async function fetchResources() {
      try {
        const res = await fetch(
          `https://6562f1caee04015769a6a775.mockapi.io/resources`
        );
        const data = await res.json();
        setResources(data);
      } catch {
        throw new Error("There was an issue retrieving resources");
      }
    }
    fetchResources();
    setIsLoading(false);
  }, []);

  //   const dispatch = useDispatch();
  //   dispatch(getResources());
  //   const resources = getResources();

  //   console.log(resources);

  if (isLoading) return <Spinner />;

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
