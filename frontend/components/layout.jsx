import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <ToastContainer />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
