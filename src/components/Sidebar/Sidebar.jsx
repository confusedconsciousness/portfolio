import "./Sidebar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack, Divider } from "@mui/material";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <Stack id="social-icon-stack">
        <GitHubIcon className="social-icon" />
        <LinkedInIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
      </Stack>
      <Divider className="divider" orientation="vertical" />
    </div>
  );
}
