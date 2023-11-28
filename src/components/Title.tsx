import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

const Title = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 1,
      }}
    >
      <ButtonBase
        onClick={() => navigate("/")}
        sx={{ display: "flex", alignItems: "center", gap: 2, px: 1 }}
      >
        <Logo />
        <Typography variant="h6" component="h1">
          Pixels
        </Typography>
      </ButtonBase>
    </Box>
  );
};

export default Title;
