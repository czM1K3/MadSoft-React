import { FC } from "react";
import { Parallax } from "react-parallax";
import { makeStyles, Typography, Container, Avatar } from "@material-ui/core";
import { Random } from "../components/random-text";

const useStyles = makeStyles((theme) => ({
    bigContainer: {
        height: "100vh"
    },
    header: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white"
    },
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17)
    },
    center: {
        margin: "auto",
        textAlign: "center"
    },
    margins: {
        marginTop: "1rem",
        marginBottom: "1rem"
    }
}));

const Main: FC = () => {
    const classes = useStyles();
    return (
        <>
            <Parallax blur={5} bgImage="/static/img/coding.webp" bgImageAlt="Coding background" >
                <div className={classes.bigContainer}>
                    <Typography variant="h1" className={classes.header}>
                        MadSoft
                    </Typography>
                </div>
            </Parallax>
            <Container maxWidth="md">
                <Avatar alt="Michal Maděra" src="/static/img/profile.jpeg" className={[classes.large, classes.center, classes.margins].join(" ")} />
                <Typography variant="h2" className={classes.center}>
                   Michal Maděra 
                </Typography>
                <div className={classes.center}>
                    <Random />
                </div>
                <Typography variant="subtitle1" className={classes.center}>
                    Nemám tušení co sem mám dát :D
                </Typography>
            </Container>
        </>
    );
};

export default Main;
