import styled from "@emotion/styled";
import { S3Client } from "@aws-sdk/client-s3";

import { useForm } from "react-hook-form";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACC_KEY,
  },
  region: "ap-southeast-1",
});

const BoxBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  flex: 1;
  margin: 5em;
`;

function Admin() {
  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {},
  });

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <BoxBackground>
      <div></div>
    </BoxBackground>
  );
}
// handleClick, variant, color

export default Admin;
