import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 ">
            <div className='w-11/12 mx-auto py-8 md:py-10 px-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">BookFlow</h2>
                        <p className="leading-relaxed max-w-xs">
                            A seamless and modern web application designed to digitize the traditional library experience. Explore and borrow your favorite titles digitally.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl font-semibold">CONTACT US</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <div className="p-2 bg-primary/10 rounded-full text-primary">
                                    <FaEnvelope />
                                </div>
                                <span>chowdhuryhridoy902@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <div className="p-2 bg-primary/10 rounded-full text-primary">
                                    <FaPhone />
                                </div>
                                <span>+880 1234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <div className="p-2 bg-primary/10 rounded-full text-primary">
                                    <FaMapMarkerAlt />
                                </div>
                                <span>Chittagong, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl font-semibold">FOLLOW US</h3>
                        <p className="text-sm">Stay connected with us on social media.</p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/" target="_blank" className="btn btn-circle btn-outline btn-primary btn-sm hover:scale-110 transition-transform">
                                <FaFacebook size={18} />
                            </a>
                            <a href="https://x.com/hridoyChyWebDev" target="_blank" className="btn btn-circle btn-outline btn-primary btn-sm hover:scale-110 transition-transform">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://github.com/hridoy-web" target="_blank" className="btn btn-circle btn-outline btn-primary btn-sm hover:scale-110 transition-transform">
                                <BsGithub size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/hridoy-chowdhury-webdev/" target="_blank" className="btn btn-circle btn-outline btn-primary btn-sm hover:scale-110 transition-transform">
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-base-300 mt-10 pt-6 text-center ">
                    <p className='text-sm md:text-base'>Copyright © {new Date().getFullYear()} - BookFlow | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;