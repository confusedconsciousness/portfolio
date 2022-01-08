import { Stack, Button, Divider } from "@mui/material";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div id="nav-bar">
      <Divider className="divider" orientation="vertical" />
      <Stack id="nav-bar-stack" spacing={2}>
        <Button className="tag">{"<About Me/>"}</Button>
        <Button className="tag">{"<Experience/>"}</Button>
        <Button className="tag">{"<Skills/>"}</Button>
        <Button className="tag">{"<Work/>"}</Button>
        <Button className="tag">{"<Contact/>"}</Button>
      </Stack>
    </div>
  );
}
