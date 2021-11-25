import React from 'react';

import CompanyList from './components/CompanyList';
import Loader from './components/Loader';

import { useGetCompaniesQuery } from './services/cosunoApi';

import './App.css';

const App = () => {

  const { data: companiesList, isFetching, error } = useGetCompaniesQuery();

  if (isFetching) return <Loader />;
  if (error) return <p>Error :(</p>;

    return (
        <div className="main">
        <CompanyList companiesList={companiesList}/>
        </div>
    )
}

export default App;
