import "./LandingPage.css"
import smartwatch from "../assets/smartwatch.svg"  
import workout from "../assets/workout.svg"
import pot from "../assets/pot.svg"
import rest from "../assets/rest.svg"
import plan from "../assets/plan.svg"
export default function LandingPage()
{
  return (
    <div className="Landing">
      <div className="hero">
        <img src={smartwatch} alt="hero img" />
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>
      <div className="tiles">
        <div className="tile">
          <img src={workout} alt="Fitness" />
          <p>Fitness</p>
        </div>
        <div className="tile">
          <img src={pot} alt="Food" />
          <p>Food</p>
        </div>
        <div className="tile">
          <img src={rest} alt="Rest" />
          <p>Rest</p>
        </div>
        <div className="tile">
          <img src={plan} alt="Planner" />
          <p>Planner</p>
        </div>
      </div>
    </div>
  );
}
