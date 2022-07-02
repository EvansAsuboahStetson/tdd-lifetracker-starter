export default function NutritionCard() {
  return (
    <div className="nutrition-card">
      <div className="main">
        <div className="cards-content">
          <div className="cards yellow">
            <p>Total Exercise Minutes</p>
            <h1>0</h1>
          </div>
          <div className="cards purple">
            <p>Avg Sleep Hours</p>
            <h1>0</h1>
          </div>
          <div className="cards lightblue">
            <p>Avg Daily Calories</p>
            <h1>0</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
