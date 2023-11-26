import { Link } from "react-router-dom";
import styles from "./ResourceItem.module.css";

function ResourceItem({ resource }) {
  const { name, price, subject, description, id } = resource;

  return (
    <li>
      <Link className={styles.resourceItem} to={`${id}`}>
        <h4>{name}</h4>
        <h4>{description}</h4>
        <h4>{subject}</h4>
        <h4>{price}</h4>
      </Link>
    </li>
  );
}

export default ResourceItem;
