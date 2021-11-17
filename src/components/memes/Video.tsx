import React, { FC, useState } from "react";
import { VideoType } from "./videos-arr";
import Plyr from "plyr-react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	bigGap: {
		padding: "15pt 0",
	},
	smallGap: {
		margin: "6pt 0",
	},
	half: {
		width: "50vh",
	}
});

type VideoProps = {
	video: VideoType
}

const Video: FC<VideoProps> = ({video}) => {
	const classes = useStyles();
	const [show, setShow] = useState(false);

	const clicked = () => {
		setShow(!show);
	}

	return (
		<div className={classes.bigGap}>
			<Typography variant="h3">{video.title}</Typography>
			<Button variant="contained" color="primary" onClick={clicked} className={classes.smallGap}>Ukázat/Skrýt</Button>
			<div style={{contentVisibility: show ? "visible" : "hidden"}} className={classes.half}>
				<Plyr source={{
					type: "video",
					sources: [{src:video.source, provider: "html5"}]
				}} />
			</div>
		</div>
	)
};

export default Video;
