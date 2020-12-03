import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Button from "@material-ui/core/Button";
import Journal from "./Journal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: 800,
    height: "80vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Journals = (props) => {
  const [journals, setJournals] = useState([]); //setJournals is being used in the fetchJournals function from Display.jsx via passed
  const classes = useStyles();
  const [fetchUrl, setFetchUrl] = useState(
    "http://localhost:3000/journal/mine"
  );


  console.log(props)

  props.fetchJournals(fetchUrl);

  useEffect(() => {
    props.fetchJournals(fetchUrl);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let buttonView;

  if (fetchUrl === "http://localhost:3000/journal/mine") {
    buttonView = "";
  } else {
    buttonView = (
      <Button onClick={setFetchUrl("http://localhost:3000/journal/mine")}>
        All Journals
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      {buttonView}
      <GridList cellHeight={250} className={classes.gridList}>
        {journals.map((journal) => (
          <Journal journal={journal} />
        ))}
      </GridList>
    </div>
  );
};
export default Journals;
