import { useState, useEffect } from 'react';

import { Row, Input, Collapse } from 'antd';

import CompanyCard from './CompanyCard';
import CheckBox from './CheckBox';

const CompanyList = ({ companiesList }) => {

    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [checkedSpeciality, setCheckedSpeciality] = useState([]);

    console.log(checkedSpeciality)

     
    useEffect(() => {

        const filteredCompanies = companiesList?.filter((company) => (
            company.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        
        
        
        setCompanies(filteredCompanies);
        
    }, [companiesList, searchTerm]);
    
    useEffect(() => {
        
        const filteredCompaniesBySpeciality = companiesList?.map((company) => {
            if (checkedSpeciality.length === 0) {
                return company;
            }
            return company?.specialities?.filter((speciality) => checkedSpeciality?.toLowerCase().includes(speciality));
        });
        

        setCompanies(filteredCompaniesBySpeciality);
        

    }, [checkedSpeciality]);


    const handleCheckbox = (speciality) => {

        const index = checkedSpeciality.indexOf(speciality);
        const newChecked = [...checkedSpeciality];

        if (index === -1) {
            newChecked.push(speciality);
        } else {
            newChecked.splice(index, 1);
        }

        setCheckedSpeciality(newChecked);
    }


    return (
        <>
            <div className="search">
                <Input placeholder="Search Construction Company" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div>
                <CheckBox handleCheckbox={handleCheckbox} />
            </div>
            <Row gutter={[32, 32]} className="card-container">
                {companies?.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                ))}
            </Row>
        </>
    )
}

export default CompanyList;
