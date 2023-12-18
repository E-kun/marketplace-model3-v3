import styled from "@emotion/styled";
import { S3Client } from "@aws-sdk/client-s3";

import CustomButton from "../components/CustomButton";
import Form from "../components/forms/Form";
import { useForm } from "react-hook-form";
import FormInputFile from "../components/forms/FormInputFile";
import { useUploadFile } from "../features/resources/useUploadFile";
import FileInputAlt from "../components/forms/FileInputAlt";

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
  const { isUploading, uploadFile } = useUploadFile();
  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {},
  });

  function onSubmit(data) {
    console.log(data);
    uploadFile(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <BoxBackground>
      <div>
        <Form>
          <FileInputAlt
            id="image"
            accept="image/*"
            type="file"
            {...register("image")}
          />

          <CustomButton
            color="primary"
            handleClick={handleSubmit(onSubmit, onError)}
          >
            File Upload Test
          </CustomButton>
        </Form>
      </div>
    </BoxBackground>
  );
}
// handleClick, variant, color

export default Admin;
