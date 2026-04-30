
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="w-11/12 mx-auto min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;