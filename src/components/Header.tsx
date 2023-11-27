import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Form from "./Form";
import { Logo } from "./Logo";

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
              padding: 1,
            }}
          >
            <Logo />
            <Typography variant="h6" component="h1">
              Pixels
            </Typography>
          </Box>
          <Form setPagination={setPagination} setSearch={setSearch} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
