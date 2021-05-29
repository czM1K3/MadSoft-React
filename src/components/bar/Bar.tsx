import { FC } from "react";
import { navLinks } from "./links";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    navDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    linkText: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: "white"
    },
    iconButton: {
        padding: 0
    },
    image: {
        height: "50px"
    }
});


const Bar: FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.iconButton}>
                        <Link to="/" style={{color: "white"}}>
                            {/* <Home /> */}
                            <img src="/logo192.png" className={classes.image} />
                        </Link>
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        { navLinks.map(({ title, path }) => (
                            <Link to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        )) }
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Bar;
