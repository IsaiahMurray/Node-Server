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

  return (
    <div className={classes.spacing}>
      <h1>Display</h1>
      <JournalCreate token={props.token}/>
      <Journals token={props.token}/>
      
    </div>
  );
}
export default Display;
