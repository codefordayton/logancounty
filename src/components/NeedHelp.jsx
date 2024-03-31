import React, { useState, useCallback} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import survey from '../data/survey.json'

import 'survey-core/defaultV2.min.css';

const _SurveyComp = ({ setIsCompleted }) => {
    const surveyConfig = new Model(survey);
    surveyConfig.focusFirstQuestionAutomatic = false;
  
    const alertResults = useCallback((sender) => {
      setIsCompleted(true);
    }, []);
  
    surveyConfig.onComplete.add(alertResults);
  
    return <Survey model={surveyConfig} />;
  }

const SurveyComp = React.memo(_SurveyComp);

function NeedHelp() {
  [isCompleted, setIsCompleted] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Header />
      <main className="p-6">
        <SurveyComp setIsCompleted={setIsCompleted} />
        {isCompleted && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => refreshPage()}>Restart</button>}
      </main>
      <Footer />
    </div>
  );
}

export default NeedHelp;
