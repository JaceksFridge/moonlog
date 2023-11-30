import './App.scss';
import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { UserContext } from './blocks/userContext';

import Home from './pages/Home'
import IntroPage from "./pages/IntroPage"
import Forms from './pages/Forms'
import Scores from './pages/Scores'
import Dashboard from './pages/Dashboard'
import GoalSettings from "./pages/GoalSettings"
import About from "./pages/About"



const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
      return <Navigate to="/" />;
  }
  return children;
};



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
            element={<ProtectedRoute><Forms /></ProtectedRoute>}
          />
          <Route 
            path="/scores"
            element={<ProtectedRoute><Scores /></ProtectedRoute>}
          />
          <Route 
            path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
          <Route 
            path="/goalsettings"
            element={<ProtectedRoute><GoalSettings /></ProtectedRoute>}
          />
          <Route
            path="/about"
            element={<ProtectedRoute><About /></ProtectedRoute>}
          />
          <Route index path="/intro1" element={
            <ProtectedRoute>
              <IntroPage
                bg="/images/intro1.png"
                title="growth"
                text="Set goals. Make strides. See results. Welcome to Moonlog."
                prog="/icons/prog1.png"
                next="/intro2"
              />
            </ProtectedRoute>
          } />
          <Route path="/intro2" element={
            <ProtectedRoute>
              <IntroPage
                bg="/images/intro2.png"
                title="progress"
                text="Track. Improve. Repeat. Achieving goals has never been this easy."
                prog="/icons/prog2.png"
                next="/intro3"
              />
            </ProtectedRoute>
          } />
          <Route path="/intro3" element={
            <ProtectedRoute>
              <IntroPage
                bg="/images/intro3.png"
                title="potential"
                text="Harness the power of consistency. Make progress visible."
                prog="/icons/prog3.png"
                next="/"
            />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  );
}

export default App;

