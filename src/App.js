import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp'; // Assuming you create this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> {/* SignUp route */}
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
