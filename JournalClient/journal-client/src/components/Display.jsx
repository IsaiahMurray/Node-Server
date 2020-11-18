import Journals from "./Journal/Journals";

const Display = (props) => {

  return (
    <div>
      <h1>Display</h1>
      <Journals token={props.token}/>
    </div>
  );
}
export default Display;
