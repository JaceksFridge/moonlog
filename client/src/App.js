import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import IntroPage from "./pages/IntroPage"
import Forms from './pages/Forms'
import Scores from './pages/Scores'
import Dashboard from './pages/Dashboard'
import GoalSettings from "./pages/GoalSettings"

function App() {

  return (
    <Router>
      <Routes>
          <Route 
            index path="/"
            element={<Home />}
          />
          <Route 
            path="/forms"
            element={<Forms />}
          />
          <Route 
            path="/scores"
            element={<Scores />}
          />
          <Route 
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route 
            path="/goalsettings"
            element={<GoalSettings />}
          />
          <Route index path="/intro1" element={
            <IntroPage
              bg="/images/intro1.png"
              title="growth"
              text="Set goals. Make strides. See results. Welcome to Moonlog."
              prog="/icons/prog1.png"
              next="/intro2"
            />
          } />
          <Route path="/intro2" element={
            <IntroPage
              bg="/images/intro2.png"
              title="progress"
              text="Track. Improve. Repeat. Achieving goals has never been this easy."
              prog="/icons/prog2.png"
              next="/intro3"
            />
          } />
          <Route path="/intro3" element={
            <IntroPage
              bg="/images/intro3.png"
              title="potential"
              text="Harness the power of consistency. Make progress visible."
              prog="/icons/prog3.png"
              next="/logreg"
            />
          } />
      </Routes>
    </Router>
  );
}

export default App;

