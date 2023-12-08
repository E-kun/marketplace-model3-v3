import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResourceList from "../components/ResourceList";

import styled from "@emotion/styled";

const CatalogueLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

function Catalogue() {
  return (
    <main>
      <Navbar />

      <CatalogueLayout>
        <Filter />
        <ResourceList />
      </CatalogueLayout>
      <Footer />
    </main>
  );
}

export default Catalogue;
