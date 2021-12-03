import React from "react";
import SurveyList from "./SurveyList";

export default function Dashboard() {
  return (
    <section className="section">
      <h1 className="title">Surveys</h1>
      <SurveyList />
    </section>
  );
}
