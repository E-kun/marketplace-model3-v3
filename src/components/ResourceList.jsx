import { useDispatch, useSelector } from "react-redux";
import ResourceItem from "./ResourceItem";
// import { getResources } from "../features/resources/resourceSlice";
import { useEffect, useState } from "react";
import styles from "./ResourceList.module.css";

import styled from "@emotion/styled";

const ResourceHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
  background-color: white;
  padding: 1em;
`;

const ResourceListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function ResourceList() {
  const [resources, setResources] = useState([]);
  const dispatch = useDispatch();

  const { isLoading } = useSelector((store) => store.resource);

  useEffect(function () {
    // dispatch(setIsLoading());

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
  }, []);

  console.log(resources);
  //   const dispatch = useDispatch();
  //   dispatch(getResources());
  //   const resources = getResources();

  //   console.log(resources);

  return (
    <ResourceListBox>
      <ResourceHeader>
        <div></div>
        <div>Resource Name</div>
        <div>Resource Description</div>
        <div>Subject</div>
        <div>Price</div>
        <div></div>
      </ResourceHeader>
      <ul className={styles.resourceList}>
        {resources.map((resource) => (
          <ResourceItem resource={resource} key={resource.id} />
        ))}
      </ul>
    </ResourceListBox>
  );
}

export default ResourceList;
