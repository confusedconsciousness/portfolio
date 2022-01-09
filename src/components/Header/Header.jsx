import { Button, Box } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <Box id="main-logo" component="img" src="/portfolio/images/kk-logo.png" />
      <Button variant="outlined" id="resume-button">
        {"<Resume/>"}
      </Button>
    </div>
  );
}
