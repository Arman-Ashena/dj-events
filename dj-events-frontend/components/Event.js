import { Button } from "@mui/material";
import Image from "next/image";
import classes from "../styles/Event.module.css";
import { useRouter } from "next/router";
import NextLink from "next/link";

export default function Event({ evt }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/events/${evt.slug}`);
  };
  return (
    <div className={classes.event}>
      <div className={classes.img}>
        <Image src={evt.image} width={170} height={100} />
      </div>
      <div className={classes.info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={classes.link}>
        <NextLink href={`/events/${evt.slug}`}>
          <a>Details</a>
        </NextLink>
        {/* <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            padding: "10px",
          }}
          onClick={handleClick}
        >
          Details
        </Button> */}
      </div>
    </div>
  );
}
