"use client"
import ProfileUpdateModal from "@/components/Ui/ProfileUpdateModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center py-10">
            <div className="bg-base-200 p-8 border border-gray-200 rounded-3xl shadow-xl flex flex-col items-center w-full max-w-md" >
                <div className="mb-6">
                    <Image
                        src={user?.image || "https://i.ibb.co.com/8gt6Mv0/user.png"}
                        alt={user?.name || "User"}
                        width={48}
                        height={48}
                        className="border-4 border-blue-500 rounded-full shadow-xl"
                    />
                </div>

                <div className="space-y-2.5 mb-8 text-center text-gray-800">
                    <h3 className="text-lg font-bold">
                        Name: <span className="text-gray-600 text-base font-semibold">{user?.name}</span>
                    </h3>
                    <h3 className="text-lg font-bold">
                        Email: <span className="text-gray-600 text-base font-semibold">{user?.email}</span>
                    </h3>
                </div>

                <ProfileUpdateModal />
            </div>
        </div>
    );
};

export default ProfilePage;