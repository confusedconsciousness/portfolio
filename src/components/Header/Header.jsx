import { Button, Typography } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <Typography id="logo">K.K</Typography>
      <Button variant="outlined" id="resume-button">
        {"<Resume/>"}
      </Button>
    </div>
  );
}
