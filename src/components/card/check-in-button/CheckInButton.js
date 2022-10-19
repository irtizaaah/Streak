import "./CheckInButton.css";

function CheckInButton(props) {
    return (
      <div className="CheckInButton">
      <button className = "button zero" onClick={()=>{props.update(0)}}></button>
        <button className = "button one" onClick={()=>{props.update(1)}}></button>
        <button className = "button two" onClick={()=>{props.update(2)}}></button>
        <button className = "button three" onClick={()=>{props.update(3)}}></button>
      </div>
    );
  }
  
  export default CheckInButton;