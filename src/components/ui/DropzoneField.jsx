import styled from "@emotion/styled";
import { useDropzone } from "react-dropzone";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export function DropzoneField({ name, inputType, setFiles }) {
  let isImageDND = false;
  let mimeRestriction = {};
  const acceptImageOnly = {
    accept: {
      "image/*": [".png", ".jpg"],
    },
  };
  inputType === "image"
    ? (isImageDND = true) && (mimeRestriction = acceptImageOnly)
    : (isImageDND = false) && (mimeRestriction = {});

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    mimeRestriction,
  });

  //   console.log(acceptedFiles);
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Container>
      {isImageDND ? (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <p>Accepted file types: PNG, JPG</p>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </div>
      ) : (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </div>
      )}
    </Container>
  );
}

// const Dropzone = ({ onChange, value }) => {
//   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

//   const files = acceptedFiles.map((file) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <>
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </>
//   );
// };
