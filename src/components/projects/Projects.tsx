import { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { projects } from "./projects";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "wrap",
      justifyContent: "center"
    },
    title: {
      color: "white",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    image: {
      objectFit: "fill",
    }
  }),
);

const Projects: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {projects.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.name} className={classes.image} />
                    <a href={tile.url}>
                      <GridListTileBar
                      title={tile.name}
                      classes={{
                          root: classes.titleBar,
                          title: classes.title,
                      }}
                      />
                    </a>
                </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default Projects;
