import styled from "@emotion/styled";

const CreateResourceForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vh;
  /* background-color: #eee7e7; */
  padding: 1rem;
  /* box-shadow: -2px 2px 5px; */
`;

function Form({ children }) {
  return <CreateResourceForm>{children}</CreateResourceForm>;
}

export default Form;
