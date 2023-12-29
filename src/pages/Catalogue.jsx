import { useState } from "react";
import Filter from "../components/ui/Filter";
import ResourceList from "../components/ui/ResourceList";
import { CatalogueLayout } from "../components/styled_components/catalogue/CatalogueLayout";

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
