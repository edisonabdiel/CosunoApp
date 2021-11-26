import { useState } from 'react';

import { specialityList } from '../constants';

import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const CheckBox = ({ handleFilters }) => {
    
    const [checkedSpeciality, setCheckedSpeciality] = useState([]);

    console.log(checkedSpeciality);

    const handleToggle = (speciality) => {

        const index = checkedSpeciality.indexOf(speciality);
        const newChecked = [...checkedSpeciality];

        if (index === -1) {
            newChecked.push(speciality);
        } else {
            newChecked.splice(index, 1);
        }

        setCheckedSpeciality(newChecked);
        handleFilters(newChecked);
    }

    const renderCheckboxList = () => specialityList.map((speciality, index) => (
        <div key={index}>
            <Checkbox
                value={speciality}
                onChange={() => handleToggle(speciality)}>
                {speciality}
            </Checkbox>
        </div>
    ));


    return (
        <>
            <Collapse defaultActiveKey={['0']} style={{ marginBottom: '25px' }}>
                <Panel header="Filter By Speciality" key="1">
                    <div className="checkbox">
                           {renderCheckboxList()}
                    </div>
                </Panel>
            </Collapse>
        </>
    )
}

export default CheckBox;
