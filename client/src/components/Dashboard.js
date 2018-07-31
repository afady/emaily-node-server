import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <Link
        to="/surveys/new"
        class="waves-effect waves-light btn-large"
        style={{ margin: '10px 0' }}
      >
        <i class="material-icons left">add</i>Create New Survey
      </Link>
      <SurveyList />
    </div>
  );
};

export default Dashboard;
