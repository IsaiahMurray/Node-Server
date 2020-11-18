import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import images from '../Images';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Journal = (props) => {
  const [journals, setJournals] = useState([]);
  const classes = useStyles();
  const [fetchUrl, setFetchUrl] = useState("http://localhost:3000/journal/mine");
  
  useEffect(() => {
    fetch("http://localhost:3000/journal/mine", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((journalArray) => {
        setJournals(journalArray);
        console.log(journalArray);
      })
      .catch((err) => console.log(err));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {journals.map((journal) => (
          <GridListTile key={journal.id}>
            <img src={images[Math.floor(Math.random()*images.length)]} alt={journal.title + " image"} />
            <GridListTileBar
              title={journal.title}
              subtitle={<span>by: {journal.owner}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default Journal;
