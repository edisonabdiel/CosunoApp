import { specialityList } from '../constants';

import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const CheckBox = ({ handleCheckbox }) => {
    return (
        <>
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
        </>
    )
}

export default CheckBox;
