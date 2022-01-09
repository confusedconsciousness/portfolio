import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

import "./Introduction.css";
const name = "Kishan Kumar.";

export default function Introduction() {
  return (
    <div id="introduction">
      <Typography className="tag">{"<introduction>"}</Typography>
      <Typography id="beginning-intro">Hi, my name is</Typography>
      <Typography id="name">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(name).pauseFor(2500).start();
          }}
        />
      </Typography>
      <Typography id="detailed-information">
        I am a Software Engineer with a demonstrated history of working in the
        tech industry. Strong engineering professional with a Bachelor of
        Technology focused in Electrical Engineering from the{" "}
        <span id="college">
          Indian Institute of Technology, Roorkee (2020).
        </span>
      </Typography>
      <Typography className="tag">{"</introduction>"}</Typography>
    </div>
  );
}
