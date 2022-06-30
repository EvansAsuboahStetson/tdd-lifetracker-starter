import "./ExercisePage.css"
export default function ExercisePage()
{
    return (
        <div className="exercise-page">
            <div className="content">
                <div className="heading">
                    <h1>Exercise</h1>
                </div>
                <div className="overview">
                    <div className="main">
                        <h1>Overview</h1>
                        <button>Add Exercise</button>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="title">
                                <div>Jogging</div>
                                 
                            </div>
                            <div className="CardStat">
                                <p>Duration</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}