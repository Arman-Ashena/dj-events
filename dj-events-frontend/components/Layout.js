import { Grid, Link, List, ListItem, Typography } from "@mui/material";
import NextLink from "next/link";
import Head from "next/head";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

const Layout = ({ title, description, keywords, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Grid
        padding={3}
        spacing={2}
        justifyContent="space-between"
        container
        boxShadow="0px 2px 3px lightgray"
      >
        <Grid item md={9}>
          <NextLink href="/" passHref>
            <Link>
              <Typography color="red">DJ EVENTS</Typography>
            </Link>
          </NextLink>
        </Grid>
        <Grid item md={3} align="right">
          <NextLink href="/events" passHref>
            <Link>
              <Typography>Events</Typography>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
      {router.pathname === "/" && <Showcase />}
      {children}
      {/* --------------------Footer-------------------------- */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        marginBottom="0"
      >
        <Grid item>
          <Typography> Copyright &copy; Arman Ashena 2022</Typography>
        </Grid>
        <Grid item justifyContent="center">
          <NextLink href="/about" passHref>
            <Link>
              <Typography> About this Project</Typography>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </>
  );
};
export default Layout;
Layout.defaultProps = {
  title: "Dj Events | Find the hotest Parties",
  description: "Find the latest Dj and other musical events",
  keywords: "dj, music, party",
};
