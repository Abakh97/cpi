import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useState, useEffect } from "react";
import cpiSchema from "./schemas/cpi";
const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }
  ]
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [schema, setSchema] = useState({});

  const getSchema = async () => {
    setSchema(cpiSchema);
    setIsLoading(false);
  };

  useEffect(() => {
    getSchema();
  }, []);

  const survey = new Model(cpiSchema);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default App;
