import { useState } from "react";
import Filter from "../components/Filter";
import ResourceList from "../components/ResourceList";

import styled from "@emotion/styled";

const CatalogueLayout = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 75vh;
`;

function Catalogue() {
  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [selectedLevel, setSelectedLevel] = useState();
  const [selectedFileType, setSelectedFileType] = useState();

  return (
    <CatalogueLayout>
      <Filter
        setSelectedPrice={setSelectedPrice}
        setSelectedLevel={setSelectedLevel}
        setSelectedSubject={setSelectedSubject}
        setSelectedType={setSelectedFileType}
      />
      <ResourceList
        filterValues={[
          selectedPrice,
          selectedSubject,
          selectedLevel,
          selectedFileType,
        ]}
      />
    </CatalogueLayout>
  );
}

export default Catalogue;
