import Faq from "@/components/Home/Faq";
import HowItWorks from "@/components/Home/HowItWorks";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="w-11/12 mx-auto min-h-screen">
                {children}
            </main>
            <HowItWorks />
            <Faq />
            <Footer />
        </div>
    );
};

export default MainLayout;