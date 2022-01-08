import { Typography } from "@mui/material";

import "./Introduction.css"

export default function Introduction() {
    return (<div id="introduction">
        <Typography className="tag">{"<introduction>"}</Typography>
        <Typography id="beginning-intro">Hi, my name is</Typography>
        <Typography id="name">Kishan Kumar.</Typography>
        <Typography id="detailed-information">I am a Software Engineer with a demonstrated history of working in the tech industry. Strong engineering professional with a Bachelor of Technology focused in Electrical Engineering from the Indian Institute of Technology, Roorkee.</Typography>
        <Typography className="tag">{"</introduction>"}</Typography>
    </div>)
}