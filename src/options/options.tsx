import React from "react";
import { createRoot } from "react-dom/client";

import "fontsource-roboto";
import "./options.css";
import { Card, CardContent, Typography } from "@mui/material";

const App: React.FC<{}> = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Weather Extension Options</Typography>
      </CardContent>
    </Card>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
