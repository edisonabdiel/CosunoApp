import React, { useState, useEffect } from 'react';

import { Card, Row, Col, Input, Checkbox, Collapse } from 'antd';

import { specialityList } from '../constants';

const { Panel } = Collapse;

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
            <Collapse defaultActiveKey={['0']} style={{marginBottom: '25px'}}>
                <Panel header="Filter By Speciality" key="1">
                    <div className="checkbox">
                        {specialityList.map((speciality, index) => (
                            <Checkbox 
                                key={index}
                                value={speciality}
                                onChange={() => handleCheckbox(speciality)}>
                                {speciality}
                            </Checkbox>
                        ))}
                    </div>
                </Panel>
            </Collapse>
            <Row gutter={[32, 32]} className="card-container">
                {companies?.map((company) => (
                    <Col key={company.id} xs={24} sm={12} lg={6} className="company-card" span={12} >
                        <Card
                            title={`${company.company_name}`}
                            extra={<img className="company-logo" src={company.logo} alt={company.company_name} />}
                            style={{ borderRadius: '3%' }}
                            hoverable
                        >
                            <h3>{company.company_name}</h3>
                            <p>Specialices in: {company.specialities}</p>
                            <p>Located at: {company.city}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CompanyList;
