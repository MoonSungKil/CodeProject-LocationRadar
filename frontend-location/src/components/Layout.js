import React from "react";
import { Button } from "@material-ui/core";
import ShareCard from "./ShareCard";

function Layout() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <ShareCard />
    </div>
  );
}

export default Layout;
