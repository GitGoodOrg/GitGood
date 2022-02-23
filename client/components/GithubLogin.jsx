import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function App() {
  // TODO - add fetch to see if user is logged in, if they are display logOut instead
  return (
    <Button
      variant="outlined"
      startIcon={<GitHubIcon />}
      onClick={() => (location.href = "/github/auth")}
    >
      github
    </Button>
  );
}
