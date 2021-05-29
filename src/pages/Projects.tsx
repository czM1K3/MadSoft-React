import { FC } from "react";
import { Container } from "@material-ui/core";
import { Projects as MyProjects } from "../components/projects";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    center: {
        textAlign: "center"
    }
});

const Projects: FC = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Typography variant="h2" className={classes.center}>Projekty</Typography>
            <MyProjects />
        </Container>
    );
};

export default Projects;
