import { FC } from "react";
import TextLoop from "react-text-loop";
import { Typography } from "@material-ui/core";
import { Texts } from "./text";

const Random: FC = () => {
    return (
        <TextLoop>
            {Texts.map((x) => (
                <Typography variant="h3" key={x}>{x}</Typography>
            ))}
        </TextLoop>
    );
};

export default Random;
