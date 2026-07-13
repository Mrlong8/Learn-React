import SideBar from "./SideBar";
import "./Admin.scss";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= 768
    );

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;

            setIsMobile(mobile);

            // Khi trở lại desktop thì đóng trạng thái mobile
            if (!mobile) {
                setToggled(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClickMenu = () => {
        if (isMobile) {
            // Mobile: hiện hoặc ẩn toàn bộ sidebar
            setToggled(prev => !prev);
        } else {
            // Desktop: thu gọn hoặc mở rộng sidebar
            setCollapsed(prev => !prev);
        }
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar
                    collapsed={collapsed}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
            </div>

            <div className="admin-content">
                <header className="admin-header">
                    <button
                        type="button"
                        className="toggle-sidebar-btn"
                        onClick={handleClickMenu}
                        aria-label={
                            isMobile
                                ? "Mở menu"
                                : "Thu gọn sidebar"
                        }
                    >
                        <FaBars />
                    </button>
                </header>

                <main className="admin-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Admin;