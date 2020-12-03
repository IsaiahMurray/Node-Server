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
    width: 800,
    height: "80vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Journals = (props) => {
  const [journals, setJournals] = useState([]);
  const classes = useStyles();
  const [fetchUrl, setFetchUrl] = useState(
    "http://localhost:3000/journal/mine"
  );

  const fetchJournals = () => {
    fetch(fetchUrl, {
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
  };

  useEffect(() => {
    fetchJournals();
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
      <GridList cellHeight={250} className={classes.gridList}>
        {buttonView}
        {journals.map((journal) => (
          <Journal fetchJournals={fetchJournals} journal={journal} />
        ))}
      </GridList>
    </div>
  );
};
export default Journals;
