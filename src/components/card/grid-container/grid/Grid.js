import Cell from "./cell/Cell";
import "./Grid.css"

function Grid(props) {
    let dayComponents = props.days.map((day)=><Cell day={day}/>);
    
    return (
      <div className="Grid">
        <p className="month_name">{props.name}</p>
        <div className="month_grid">{dayComponents}</div>
      </div>
    );
  }
  
  export default Grid;