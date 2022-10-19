import {useState, useEffect} from "react";

import gridData from "../../data/grid-data.json"

import BadgeContainer from "./badge-container/BadgeContainer";
import GridContainer from "./grid-container/GridContainer";
import CheckInButton from "./check-in-button/CheckInButton";

import "./Card.css"

function Card() {
  
  let monthList =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  const [name, setName] = useState("Streak");
  const [allMonths, setAllMonths] = useState([...gridData.allMonths])
  const [streak, setStreak] = useState(0);
  const [superStreak, setSuperStreak] = useState(0);
  const [ultraStreak, setUltraStreak] = useState(0);

  let currDate = new Date();
  let thisMonth = currDate.getMonth();
  let today = currDate.getDate();

  const update = (rating) => {
    let newData = [...allMonths];
    newData[thisMonth][today] = rating;
    if(today > 0 && newData[thisMonth][today-1] === 1 && (newData[thisMonth][today] === newData[thisMonth][today-1])){
      setStreak(streak+1);
    }
    if(today > 0 && newData[thisMonth][today-1] === 2 && (newData[thisMonth][today] === newData[thisMonth][today-1])){
      setSuperStreak(superStreak+1);
    }
    if(today > 0 && newData[thisMonth][today-1] === 3 && (newData[thisMonth][today] === newData[thisMonth][today-1])){
      setUltraStreak(ultraStreak+1);
    }
    setAllMonths(newData);
  }

  let months = allMonths
  .map((month,i)=>{return {name: monthList[i], days: month}}) //format
  .filter((month,i)=>(month.name === monthList[thisMonth])||(month.name === monthList[thisMonth-1])||(month.name === monthList[thisMonth+1])) //get month before, current, after

  return (
    <div className="Card">
      <h1>{name}</h1>
      <BadgeContainer streak = {streak} superStreak = {superStreak} ultraStreak = {ultraStreak}/>
      <GridContainer months = {months}/>
      <CheckInButton update = {update}/>
    </div>
  );
}

export default Card;

/*

month: "jan"
days: [2,3,4,5]

*/