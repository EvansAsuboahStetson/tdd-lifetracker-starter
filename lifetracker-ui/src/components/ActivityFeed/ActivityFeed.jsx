import "./ActivityFeed.css";
import SummaryStat from "components/SummaryStat/SummaryStat";
import {Link} from 'react-router-dom'
export default function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="actions">
        <h2 className="heading">Activity Feed</h2>
        <div className="buttons">
          <button className="addExerciseBtn" id="act-btn">
            Add Exercise
          </button>
          <button className="logSleepBtn" id="act-btn">
            Log Sleep
          </button>

          <Link to="/nutrition/create">
            <button className="Record Nutrition" id="act-btn">
              Record Nutrition
            </button>
          </Link>
        </div>
      </div>
      <SummaryStat />
    </div>
  );
}
