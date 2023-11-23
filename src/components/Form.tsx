import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

import Error from "./Error";

import type { FormEvent } from "react";

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
    <div className="p-3  text-center">
      <Typography variant="h1" component={"h1"}>
        Pixels <i className="fas fa-image"></i>
      </Typography>
      <small>Your favorite image gallery</small>
      <Box
        component={"form"}
        sx={{ maxWidth: 500, width: "100%", m: "1rem auto" }}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            fullWidth
            type="text"
            placeholder="Ex. Grumpy cat"
            label="Search"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {hasError ? <Error message="Type something!" /> : null}
      </Box>
    </div>
  );
};

export default Form;
