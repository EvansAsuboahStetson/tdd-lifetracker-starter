import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityPage";
import ExercisePage from "components/ExercisePage/ExercisePage";
import Nutrition from "components/NutritionPage/NutritionPage";
import SleepPage from "components/SleepPage/SleepPage";
import { useState } from "react";
import NutritionForm from "components/NutritionForm/NutritionForm";
import NutritionNew from "components/NutritionNew/NutritionNew";

export default function App() {
  const [appState, setAppState] = useState({});
  console.log("App", appState);
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route
                path="/login"
                element={<LoginPage setAppState={setAppState} />}
              ></Route>
              <Route
                path="/register"
                element={<RegistrationPage setAppState={setAppState} />}
              />
              <Route
                path="/activity"
                element={
                  <ActivityPage
                    setAppState={setAppState}
                    appState={appState}
                    user={appState?.user}
                  />
                }
              ></Route>
              <Route path="/exercise" element={<ExercisePage />}></Route>
              <Route path="/nutrition" element={<Nutrition />}></Route>
              <Route path="/sleep" element={<SleepPage />}></Route>
              <Route
                path="/nutrition/create"
                element={
                  <NutritionNew
                    setAppState={setAppState}
                    appState={appState}
                  />
                }
              ></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}
