import { Outlet } from "react-router";

function UserOnlyPages() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default UserOnlyPages;
