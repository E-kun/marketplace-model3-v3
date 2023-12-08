import { Link } from "react-router-dom";
import styles from "./ResourceItem.module.css";

import styled from "@emotion/styled";

const StyledResourceName = styled.h3`
  align-self: flex-start;
`;

const StyledResourceItem = styled.li`
  background-color: #94ec94;
  max-width: 900px;
`;

const StyledResourceUnName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

function ResourceItem({ resource }) {
  const { name, price, subject, description, id } = resource;

  return (
    <StyledResourceItem>
      <Link className={styles.resourceItem} to={`${id}`}>
        <div>
          <div>
            <StyledResourceName>{name}</StyledResourceName>
          </div>
          <StyledResourceUnName>
            <h4>{description}</h4>
            <h4>{subject}</h4>
          </StyledResourceUnName>
        </div>
        <h4>RM{price}</h4>
      </Link>
    </StyledResourceItem>
  );
}

export default ResourceItem;
