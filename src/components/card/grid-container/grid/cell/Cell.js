import "./Cell.css";

function Cell(props) {
  let cellColor = "";

  if(props.day === 0){
    cellColor = "zero";
  }
  else if(props.day === 1){
    cellColor = "one";
  }
  else if(props.day === 2){
    cellColor = "two";
  }
  else if(props.day === 3){
    cellColor = "three";
  }
    return (
      <div className={`Cell ${cellColor}`}>
      </div>
    );
  }
  
  export default Cell;