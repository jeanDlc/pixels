import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Form from "./Form";
import Title from "./Title";

const Header = ({
  setPagination,
  setSearch,
}: {
  setSearch: (s: string) => void;
  setPagination: (p: number) => void;
}) => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Title />
          <Form setPagination={setPagination} setSearch={setSearch} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
