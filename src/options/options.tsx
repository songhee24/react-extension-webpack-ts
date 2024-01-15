import React from "react";
import { createRoot } from "react-dom/client";

import "fontsource-roboto";
import "./options.css";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const App: React.FC<{}> = () => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography variant="h4">Weather Extension Options</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Home city name</Typography>
            <TextField placeholder="Enter a home city name" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
