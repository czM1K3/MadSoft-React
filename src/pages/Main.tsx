import { FC, lazy, Suspense } from "react";
import { Parallax } from "react-parallax";
import { makeStyles, Typography } from "@material-ui/core";

const Lazy = lazy(() => import("../components/main-components/MainComponents"));

const useStyles = makeStyles({
    bigContainer: {
        height: "100vh"
    },
    header: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontWeight: "bold"
    },
    background: {
        backgroundColor: "#292c34"
    }
});

const Main: FC = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.background}>
                <Parallax blur={5} bgImage="/static/img/coding.webp" bgImageAlt="Coding background" >
                    <div className={classes.bigContainer}>
                        <Typography variant="h1" className={classes.header}>
                            MadSoft
                        </Typography>
                    </div>
                </Parallax>
            </div>
            <Suspense fallback={<h2>Načítání...</h2>}>
                <Lazy />
            </Suspense>
        </>
    );
};

export default Main;
