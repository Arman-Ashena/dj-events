import { Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import Event from "../../components/Event";
import axios from "axios";
import { Box } from "@mui/system";
import classes from "../../styles/events.module.css";

export default function EventsPage({ events }) {
  return (
    <Layout title="Events">
      <Typography
        sx={{ fontFamily: "Poppins", fontWeight: 600 }}
        padding="30px"
        variant="h5"
      >
        Events
      </Typography>
      <Box>
        {events.map((evt) => (
          <Event key={evt.id} evt={evt} />
        ))}
      </Box>
      {events.length > 0 && <a className="btn-secondary">View All Events</a>}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(`${API_URL}/api/events`);
  let events = data.events;
  return { props: { events: events.slice(0, 3) } };
}
