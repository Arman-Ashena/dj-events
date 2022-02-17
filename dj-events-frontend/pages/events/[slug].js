import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter();
  return (
    <>
      <h1>My Event</h1>
      <h2>slug is : {router.query.slug}</h2>
    </>
  );
}
