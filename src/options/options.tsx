import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "fontsource-roboto";
import "./options.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  getStoredOptions,
  LocalStorageOptions,
  setStoredOptions,
} from "../utils/storage";

type FormState = "ready" | "saving";

const App: React.FC<{}> = () => {
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);
  const [form, setForm] = useState<FormState>("ready");
  const handleHomeCityChange = (homeCity: string) => {
    setOptions({
      ...options,
      homeCity,
    });
  };

  const handleSaveButtonClick = async () => {
    setForm("saving");
    await setStoredOptions(options);
    setTimeout(() => {
      setForm("ready");
    }, 1000);
  };

  useEffect(() => {
    getStoredOptions().then((options) => setOptions(options));
  }, []);

  const handleAutoOverlayChange = (hasAutoOverlay: boolean) => {
    setOptions({
      ...options,
      hasAutoOverlay,
    });
  };

  if (!options) {
    return null;
  }

  const isFieldSaving = form === "saving";

  return (
    <Box mx="15%" my="2%">
      <Card>
        <CardContent>
          <Grid container flex={"flex"} flexDirection={"column"} spacing={2}>
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
                value={options.homeCity ?? ""}
                disabled={isFieldSaving}
                onChange={(event) => handleHomeCityChange(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Auto toggle overlay on webpage load
              </Typography>
              <Switch
                color="primary"
                value={options.hasAutoOverlay}
                onChange={(_, checked) => handleAutoOverlayChange(checked)}
                disabled={isFieldSaving}
              />
            </Grid>
            <Grid item>
              <Button
                disabled={isFieldSaving}
                variant="contained"
                color="primary"
                onClick={handleSaveButtonClick}
              >
                {form === "ready" ? "Save" : "Saving..."}
              </Button>
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
