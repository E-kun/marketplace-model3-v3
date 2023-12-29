import styled from "@emotion/styled";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router";

const Main = styled.main`
  overflow: scroll;
`;

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
