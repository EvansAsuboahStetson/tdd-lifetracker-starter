import NutritionForm from "components/NutritionForm/NutritionForm";
import { useState } from "react";
import "./NutritionNew.css";

export default function NutritionNew({ setAppState, appState }) {
    const { nutrition_products, setNutrition_products } = useState([])
    
  return (
    <div className="nutrition-new">
      <div className="card">
        <h2>Add Nutrition</h2>
        <br />
        <NutritionForm  setAppState={setAppState} appState={appState} nutrition_products={nutrition_products} setNutrition_products={setNutrition_products} />
      </div>
    </div>
  );
}
