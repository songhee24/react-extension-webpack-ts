import React from "react";
import { createRoot } from "react-dom/client";

import "fontsource-roboto";
import "./options.css";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const App: React.FC<{}> = () => {
  return (
    <Box mx="15%" my="2%">
      <Card>
        <CardContent>
          <Grid container flex={"flex"} flexDirection={"column"}>
            <Grid item>
              <Typography variant="h4">Weather Extension Options</Typography>
            </Grid>
            <Box height="30px" />
            <Grid item>
              <Typography variant="body1">Home city name</Typography>
              <TextField
                fullWidth
                variant={"standard"}
                placeholder="Enter a home city name"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
