import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { display, width } from "@mui/system";
import Image from "next/image";
import classes from "../styles/Events.module.css";

export default function Event({ evt }) {
  return (
    <Grid item>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "columns",
          margin: "auto",
          padding: "13px",
          margin: "20px 0px",
          boxShadow: "2px 3px 5px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={3} xs={5}>
            <CardMedia
              component="img"
              image={evt.image}
              title={evt.name}
              sx={{ flex: 1 }}
            ></CardMedia>
          </Grid>
          <Grid item md={7} xs={8}>
            <CardContent
              sx={{
                flex: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "GrayText",
                }}
              >
                {evt.date}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "800",
                  wordWrap: "normal",
                }}
              >
                {evt.name}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={2} xs={5}>
            <CardContent>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  padding: "15px 20px",
                }}
              >
                Details
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
