import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";

const GithubLink = ({ color }: { color?: string }) => {
  return (
    <Tooltip title="Visit Github page">
      <IconButton
        aria-label="Github"
        href="https://github.com/jeanDlc/pixels"
        target="_blank"
        rel="noreferrer nofollow"
        sx={{ color }}
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
};

export default GithubLink;
