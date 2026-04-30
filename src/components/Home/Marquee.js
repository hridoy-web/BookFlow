import Marquee from "react-fast-marquee";
import { FaGift } from "react-icons/fa";

const MarqueeBanner = () => {
    return (
        <div className="bg-[#F3E8FF] border-y border-purple-100 py-3 mb-8 rounded-md">

            <Marquee pauseOnHover={true} speed={50}>

                <div className="flex gap-20 items-center">
                  
                    <div className="flex items-center gap-3 ml-10">
                        <span className="badge badge-primary badge-soft badge-outline ">NEW </span>
                       
                        <span className="text-gray-700 font-semibold text-sm md:text-base">
                           <span className="text-pink-600">The Silent Patient</span> is now available in our collection
                        </span>
                    </div>

                   
                    <div className="flex items-center gap-3">
                        <span className="text-secondary"><FaGift /></span>
                        <span className="text-gray-700 font-medium text-sm md:text-base">
                            Get <span className="text-primary font-bold ">20% Off</span> on Yearly Memberships
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-secondary"><FaGift /></span>
                        <span className="text-gray-700 font-medium text-sm md:text-base">
                            Flash Sale: The Great Gatsby at <span className="text-primary font-bold ">40% Off</span>
                        </span>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeBanner;