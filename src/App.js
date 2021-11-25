import React from 'react';

import {CompanyList, Loader } from './components';

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
