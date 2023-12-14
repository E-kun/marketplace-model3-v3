import styled from "@emotion/styled";
import { Avatar, Paper } from "@mui/material";
import { useUserSession } from "../features/users/useUserSession";

const ProfileBox = styled(Paper)`
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vh;
  background-color: white;
  /* background-color: #eee7e7; */
  padding: 1rem;
  /* box-shadow: -2px 2px 5px; */
`;

function Profile() {
  const { user } = useUserSession();
  // console.log(user);

  return (
    <ProfileBox>
      <Avatar
        src="/broken-image.jpg"
        sx={{ height: "100px", width: "100px" }}
      />
      <h2>
        {user.user_metadata.firstName + " " + user.user_metadata.lastName}
      </h2>
      <p>Account Type: Seller</p>
      <p>Location: Kuala Lumpur, Selangor, Malaysia</p>
    </ProfileBox>
  );
}

export default Profile;
