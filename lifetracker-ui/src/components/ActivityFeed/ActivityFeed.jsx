import "./ActivityFeed.css";
import SummaryStat from "components/SummaryStat/SummaryStat";
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
          <button className="Record Nutrition" id="act-btn">
            Record Nutrition
          </button>
        </div>
      </div>
      <SummaryStat />
    </div>
  );
}
