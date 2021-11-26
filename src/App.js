// Custom Components
import {CompanyList, Loader, Navbar } from './components';
// API
import { useGetCompaniesQuery } from './services/cosunoApi';
// Global Styles
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
