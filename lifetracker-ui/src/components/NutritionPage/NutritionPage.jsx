import "./NutritionPage.css";
import { useNavigate, Link } from "react-router-dom";
export default function Nutrition() {
  return (
    <div className="nutrition-page">
      <div className="content">
        <div className="heading">
          <h1>Nutrition</h1>
        </div>
        <div className="overview">
          <div className="main">
            <h1>Overview</h1>
            <Link className="link-component" to="/nutrition/create">
              <button>Record Nutrition</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
