import { useEffect } from "react";
import { useUserSession } from "../features/users/useUserSession";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUserSession();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <CircularProgress />
      </FullPage>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
