import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchUser } from "./features/auth/authSlice";
import CoreLayout from "./components/CoreLayout";
import LandingPage from "./features/landing/LandingPage";
import Dashboard from "./features/survey/Dashboard";
import CreateSurvey from "./features/survey/CreateSurvey";
import Thanks from "./features/survey/Thanks";

const NotFound = () => <h2>Theres nothing here!</h2>;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoreLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<CreateSurvey />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
