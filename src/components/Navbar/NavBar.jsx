import { Stack, Button, Divider } from "@mui/material";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div id="nav-bar">
      <Divider className="divider" orientation="vertical" />
      <Stack id="nav-bar-stack" spacing={2}>
        <Button href="/" className="tag">
          {"<About Me/>"}
        </Button>
        <Button href="#experience" className="tag">
          {"<Experience/>"}
        </Button>
        <Button href="#skills" className="tag">
          {"<Skills/>"}
        </Button>
        <Button href="#work" className="tag">
          {"<Work/>"}
        </Button>
        <Button href="#contact" className="tag">
          {"<Contact/>"}
        </Button>
      </Stack>
    </div>
  );
}
