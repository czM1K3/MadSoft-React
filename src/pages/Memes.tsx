import React, { FC } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Videos from "../components/memes/Videos";

const useStyles = makeStyles({
	center: {
	    textAlign: "center"
	}
    });

const Memes: FC = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="md">
			<Typography variant="h2" className={classes.center}>Memes</Typography>
			<Videos />
		</Container>
	);
};

export default Memes;
