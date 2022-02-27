import React from "react";
import { Box, Typography } from "@mui/material";

export default function Showcase() {
  return (
    <Box className="showCaseImage">
      <Typography
        sx={{ fontFamily: "Poppins", textAlign: "center", fontWeight: 600 }}
        variant="h4"
      >
        Welcome To The Party!
      </Typography>

      <Typography
        sx={{ fontFamily: "Poppins", textAlign: "center", fontWeight: 600 }}
        variant="h5"
      >
        Find the hotest Dj Event
      </Typography>
    </Box>
  );
}
