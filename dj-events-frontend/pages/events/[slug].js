import axios from "axios";
import { API_URL } from "../../config";

export default function EventPage({ evt }) {
  return (
    <>
      <h1>{evt.name}</h1>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${API_URL}/api/events`);

  const paths = data.events.map((evt) => ({
    params: {
      slug: evt.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let event;
  try {
    const { data } = await axios.get(`${API_URL}/api/events/${slug}`);
    event = data.evt[0];
  } catch (error) {}

  return {
    props: { evt: event },
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   let event;
//   try {
//     const { data } = await axios.get(`${API_URL}/api/events/${slug}`);
//     event = data.evt[0];
//   } catch (error) {}

//   return {
//     props: { evt: event },
//   };
// }
