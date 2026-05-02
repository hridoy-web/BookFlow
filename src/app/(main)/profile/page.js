"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">

            <div className="bg-base-200 p-8 border border-gray-200 rounded-3xl shadow-xl flex flex-col items-center w-full max-w-md" >

                <div className="mb-6">
                        <Image
                            src={user?.image }
                            alt={user?.name || "User"}
                            width={100}
                            height={100}
                            className="border-4 border-blue-500 rounded-full object-cover shadow-xl"
                        />
                </div>

                <div className="space-y-2.5 mb-8 text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                        Name: <span className="text-gray-600 text-base font-semibold">{user?.name}</span>
                    </h3>
                    <h3 className="text-lg font-bold text-gray-800">
                        Email: <span className="text-gray-600 text-base font-semibold">{user?.email}</span>
                    </h3>
                </div>

                <button className="btn btn-primary w-full gap-2 font-bold shadow-md hover:scale-105 transition-transform duration-300">
                    <FaUserEdit className="text-xl" />
                    Update your profile
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;