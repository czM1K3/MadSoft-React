import React, { FC } from "react";
import Video from "./Video";
import { videos } from "./videos"
import { useLocation } from "react-router-dom";

import "plyr-react/dist/plyr.css"

const Videos: FC = () => {
	if (useLocation().search === "?nsfw") return (
		<>
			{videos.map(x => (
				<Video video={x} key={x.source} />
			))}
		</>
	)
	return (
		<>
			{videos.filter(x => !x.nsfw).map(x => (
				<Video video={x} key={x.source} />
			))}
		</>
	);
};

export default Videos;
