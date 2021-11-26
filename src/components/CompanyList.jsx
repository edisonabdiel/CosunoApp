// React Hooks
import { useState, useEffect } from 'react';
// Ant Design Components
import { Row, Input } from 'antd';
//Custom Components
import { CompanyCard, CheckBox } from './';

const CompanyList = ({ companiesList }) => {

    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const filteredCompanies = companiesList?.filter((company) => (
            company.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        setCompanies(filteredCompanies);

    }, [companiesList, searchTerm]);

    const showFilteredCompanies = () => {
        return companies?.map((company) => (
            <CompanyCard
                key={company.id}
                company={company}
            />
        ));
    };

    const handleFilters = (filters) => {

        if (filters.length === 0) {
            setCompanies(companiesList);
        } else {
            setCompanies(companiesList?.filter((company) => (
                company?.specialities?.includes(filters[0]))
            ));
        }
    };

    return (
        <>
            <div className="search">
                <Input placeholder="Search Construction Company" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div>
                <CheckBox handleFilters={filters => handleFilters(filters)} />
            </div>
            <Row gutter={[32, 32]} className="card-container">
                {showFilteredCompanies()}
            </Row>
        </>
    )
}

export default CompanyList;
