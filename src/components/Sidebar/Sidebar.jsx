import "./Sidebar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack, Divider, Link } from "@mui/material";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <Stack id="social-icon-stack">
        <GitHubIcon
          className="social-icon"
          onClick={(event) =>
            window.open("https://github.com/confusedconsciousness", "_blank")
          }
        />

        <LinkedInIcon
          className="social-icon"
          onClick={(event) =>
            window.open(
              "https://www.linkedin.com/in/kishankumarchandravanshi/",
              "_blank"
            )
          }
        />
        <TwitterIcon
          className="social-icon"
          onClick={(event) =>
            window.open("https://twitter.com/kishunkumaar", "_blank")
          }
        />
      </Stack>
      <Divider className="divider" orientation="vertical" />
    </div>
  );
}
