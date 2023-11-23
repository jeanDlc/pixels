import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h1" component={"h1"}>
        Pixels
      </Typography>
      <small>Your favorite image gallery</small>
      <Box
        component={"form"}
        sx={{ maxWidth: 500, width: "100%", m: "1rem auto" }}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            error={hasError}
            fullWidth
            type="text"
            placeholder="Ex. Grumpy cat"
            label="Search"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <Snackbar
          open={hasError}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            variant="filled"
            severity="error"
            onClose={() => setHasError(false)}
          >
            You must input a valid text to search!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
