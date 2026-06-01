import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const AdminLayout = () => {
    return (
        <>
            <Navbar />

            <main
                style={{
                    flex: 1,
                    padding: "20px",
                }}
            >
                <Outlet />
            </main>
        </>
    );
}

export default AdminLayout;