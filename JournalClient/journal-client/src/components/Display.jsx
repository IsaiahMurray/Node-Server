import Journals from "./Journal/Journals";
import JournalCreate from './Journal/JournalCreate';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spacing: {
    justifyContent: 'center',
  }
}))



const Display = (props) => {
const classes = useStyles();

const fetchJournals = (fetchUrl, setJournals) => {
  fetch(fetchUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: props.token,
    },
  })
    .then((res) => res.json())
    .then((journalArray) => {
      setJournals(journalArray); //Will be used to change state in Journals.jsx
      console.log(journalArray);
    })
    .catch((err) => console.log(err));
}
  return (
    <div className={classes.spacing}>
      <h1>Display</h1>
      <JournalCreate fetchJournals={fetchJournals} token={props.token}/>
      <Journals fetchJournals={fetchJournals} token={props.token}/>
      
    </div>
  );
}
export default Display;
