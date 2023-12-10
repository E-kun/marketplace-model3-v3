import Filter from "../components/Filter";
import ResourceList from "../components/ResourceList";

import styled from "@emotion/styled";

const CatalogueLayout = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 75vh;
`;

function Catalogue() {
  return (
    <CatalogueLayout>
      <Filter />
      <ResourceList />
    </CatalogueLayout>
  );
}

export default Catalogue;
