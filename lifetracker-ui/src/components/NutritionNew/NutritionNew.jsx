import NutritionForm from "components/NutritionForm/NutritionForm";
import "./NutritionNew.css";

export default function NutritionNew({setAppState, appState}) {
  return (
    <div className="nutrition-new">
      <div className="card">
        <h2>Add Nutrition</h2>
        <br />
        <NutritionForm  setAppState={setAppState} appState={appState}  />
      </div>
    </div>
  );
}
