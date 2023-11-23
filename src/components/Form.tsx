import { FormEvent, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
/**styled components*************************************************** */
const MiForm = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 1rem auto;
`;
const Input = styled.input`
  font-size: 1.3rem;
`;

/**componentes********************************************************* */
const Form = ({
  setSearch,
  setPagination,
}: {
  setSearch: (s: string) => void;
  setPagination: (p: number) => void;
}) => {
  const [category, setCategory] = useState("");
  const [hasError, setHasError] = useState(false);
  //submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (category.trim() === "") {
      setHasError(true);
      return;
    }
    setPagination(1);
    setHasError(false);

    setSearch(category.trim());

    setCategory("");
  };

  return (
    <div className="p-3 bg-primary text-center">
      <h1 className="text-light mb-0 display-3">
        Pixels <i className="fas fa-image"></i>
      </h1>
      <small className="text-light">Your favorite image gallery</small>
      <MiForm onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            type="text"
            placeholder="¿Qué buscas?"
            value={category}
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-block border">
          Search
        </button>
        {hasError ? <Error message="Type something!" /> : null}
      </MiForm>
    </div>
  );
};

export default Form;
