import { Avatar } from "@mui/material";
import { useUserSession } from "../features/users/useUserSession";
import { ProfileBox } from "../components/styled_components/profile/ProfileBox";

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
