import { useDispatch, useSelector } from "react-redux";
import ResourceItem from "./ResourceItem";
// import { getResources } from "../features/resources/resourceSlice";
import { useEffect, useState } from "react";
import styles from "./ResourceList.module.css";

function ResourceList() {
  const [resources, setResources] = useState([]);

  useEffect(function () {
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
    <ul className={styles.resourceList}>
      {resources.map((resource) => (
        <ResourceItem resource={resource} key={resource.id} />
      ))}
    </ul>
  );
}

export default ResourceList;
