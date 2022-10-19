import "./Badge.css"

function Badge(props) {
    return (
      <div className="Badge">
          <p className = {`badge_tag ${props.badgeClass}`}>Streak<span> {props.streak}</span></p>
      </div>
    );
  }
  
  export default Badge;