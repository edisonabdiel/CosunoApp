import React, { useState, useEffect } from 'react';

import { Card, Row, Col, Input } from 'antd';

import { useGetCompaniesQuery } from '../services/cosunoApi';

import Loader from './Loader';

const CompanyList = () => {
    
    const { data: companiesList, isFetching } = useGetCompaniesQuery();
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log('companiesList', companiesList);
    // Gets executed whenever the dependencies array changes. 
    useEffect(() => {

        const filteredCompanies = companiesList?.filter((company) => (
            company.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        setCompanies(filteredCompanies);

    }, [companiesList, searchTerm]);

    if (isFetching) return <Loader />;


    return (
        <>
                <div className="search">
                    <Input placeholder="Search Construction Company" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            <Row gutter={[32, 32]} className="card-container">
                {companies?.map((company) => (
                    <Col key={company.id} xs={24} sm={12} lg={6} className="company-card" span={12} >
                            <Card
                                title={`${company.company_name}`}
                                extra={<img className="company-logo" src={company.logo} alt={company.company_name} />}
                                style={{borderRadius: '3%'}}
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
