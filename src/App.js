import React from 'react';

import {CompanyList, Loader, Navbar } from './components';

import { useGetCompaniesQuery } from './services/cosunoApi';

import './App.css';

const App = () => {

  const { data: companiesList, isFetching, error } = useGetCompaniesQuery();

  if (isFetching) return <Loader className="loader"/>;
  if (error) return <p>Error :(</p>;

    return (
      <div className="main">
        <Navbar />
        <CompanyList companiesList={companiesList}/>
        </div>
    )
}

export default App;
