import Grid from "./grid/Grid";
import "./GridContainer.css"

function GridContainer(props) {

  let monthComponents = props.months.map((month)=><Grid name={month.name} days={month.days}/>);

    return (
      <div className="GridContainer">
        {monthComponents}
      </div>
    );
  }
  
  export default GridContainer;