import 'react-pro-sidebar/dist/css/styles.css';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';

import {
    FaTachometerAlt,
    FaGem,
    FaGithub,
    FaReact,
    FaUsers,
    FaQuestionCircle,
    FaClipboardList,
    FaAngleLeft,
    FaAngleRight
} from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';

import sidebarBg from '../../assets/bg2.jpg';
import './SideBar.scss';

const SideBar = ({
    collapsed,
    toggled,
    handleToggleSidebar
}) => {
    const navigate = useNavigate();

    return (
        <ProSidebar
            image={sidebarBg}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            className="custom-sidebar"
        >
            <SidebarHeader>
                <div className="sidebar-header-content">
                    <div
                        className="sidebar-brand-wrapper"
                        onClick={() => navigate('/')}
                    >
                        <div className="sidebar-logo">
                            <FaReact />
                        </div>

                        {!collapsed && (
                            <span className="sidebar-brand">
                                Dragon BX
                            </span>
                        )}
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt />}>
                        Dashboard
                        <Link to="/admins" />
                    </MenuItem>

                    <SubMenu
                        icon={<FaGem />}
                        title="Features"
                    >
                        <MenuItem icon={<FaUsers />}>
                            Quản lý Users
                            <Link to="/admins/manage-user" />
                        </MenuItem>

                        <MenuItem icon={<FaClipboardList />}>
                            Quản lý Bài Quiz
                            <Link to="/admins/manage-quizzes" />
                        </MenuItem>

                        <MenuItem icon={<FaQuestionCircle />}>
                            Quản lý câu hỏi
                            {/* <Link to="/admins/manage-questions" /> */}
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter>
                <div className="sidebar-btn-wrapper">
                    <a
                        href="https://github.com/Mrlong8"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />

                        {!collapsed && <span>MrLong8</span>}
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;