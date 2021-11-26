//Antd Components
import { Menu } from 'antd';
// Icons
import { BsTools } from 'react-icons/bs';


const { Item } = Menu;

const Navbar = () => (
        <div className="navbar">
            <Menu mode="horizontal">
                    <Item key="logo" icon={<BsTools size="20" />}>
                        CosunoApp
                    </Item>
            </Menu>
        </div>
    )

export default Navbar;
