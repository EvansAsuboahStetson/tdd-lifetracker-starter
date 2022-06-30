import "./SummaryStat.css"
export default function SummaryStat()
{
    return (
        <div className="summary-stat">
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
            <div className="more">
                <h2>More</h2>
                <div className="moreCardContent">
                    <div className="cards blue">
                        <p>Maximum Hourly Calories</p>
                        <h4>0</h4>
                    </div>
                    <div className="cards gold">
                        <p>Maximum Hourly Calories</p>
                         <h4>0</h4>
                    </div>
                    <div className="cards red">
                        <p>Maximum Hourly Calories</p>
                         <h4>0</h4>
                     </div>
                </div>
            </div>
        </div>
    )
}