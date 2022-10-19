import Badge from "./badge/Badge"

import "./BadgeContainer.css";

function BadgeContainer(props) {

  let allStreaks = [props.streak, props.superStreak, props.ultraStreak];
  let max = -Infinity;
  let maxIndex = 0;

  return (
      <div className="BadgeContainer">
        <Badge badgeClass="streak" badgeType="Streak" streak={props.streak}/>
        <Badge badgeClass="superStreak" badgeType="Super Streak" streak={props.superStreak}/>
        <Badge badgeClass="ultraStreak" badgeType="Ultra Streak" streak={props.ultraStreak}/>
      </div>
    );
  }
  
  export default BadgeContainer;