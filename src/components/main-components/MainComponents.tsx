import { FC } from "react";
import { makeStyles, Typography, Container, Avatar } from "@material-ui/core";
import { Random } from "../random-text";

const useStyles = makeStyles((theme) => ({
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

const MainComponents: FC = () => {
    const classes = useStyles();
    return (
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
    );
};

export default MainComponents;
