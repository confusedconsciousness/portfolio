import { Button, Typography } from "@mui/material";
import "./NavBar.css"

export default function NavBar() {
    return <div id="nav-bar">
        <Typography id="logo">K.K</Typography>
        <Button  variant="outlined" id="resume-button">
           {"<Resume/>"}
        </Button>
    </div>
}