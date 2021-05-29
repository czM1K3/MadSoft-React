import { FC } from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#3f51b5",
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,

    },
    footerContent: {
        color: "white",
        padding: "4px",
        textAlign: "center"
    },
    fakeFooter: {
        height: "30px"
    }
})

const Footer: FC = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.fakeFooter} />
            <div className={classes.footer}>
                <Typography className={classes.footerContent}>MadSoft © 2021</Typography>
            </div>
        </>
    );
};

export default Footer;
