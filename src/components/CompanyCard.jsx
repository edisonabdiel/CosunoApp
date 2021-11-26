//AntD Components
import { Col, Card } from 'antd';

const CompanyCard = ({ company }) => (
    <>
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
    </>
)

export default CompanyCard;
