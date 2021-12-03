import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys, selectSurveys } from "./surveySlice";

export default function SurveyList() {
  const dispatch = useDispatch();
  const surveys = useSelector(selectSurveys);

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  if (surveys === null) {
    return "";
  }

  if (surveys.length === 0) {
    return "No surveys yet";
  }

  return surveys.map((survey) => {
    return (
      <div key={survey._id} className="card mb-4">
        <div className="card-content">
          <p className="title">{survey.title}</p>
          <p className="subtitle">{survey.subject}</p>
          <p>Sent: {new Date(survey.dateSent).toLocaleDateString()}</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">Yes: {survey.yes}</p>
          <p className="card-footer-item">No: {survey.no}</p>
        </footer>
      </div>
    );
  });
}
