import CustomButton from "./CustomButton";
import { useLogout } from "../../features/users/useLogout";
import { CircularProgress } from "@mui/material";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <CustomButton
      disabled={isLoading}
      handleClick={logout}
      variant="contained"
      color="secondary"
    >
      {!isLoading ? "Log out" : <CircularProgress />}
    </CustomButton>
  );
}

export default Logout;
