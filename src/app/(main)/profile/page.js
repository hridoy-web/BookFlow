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

                <div className="mb-6 rounded-full avatar avatar-online">
                    <Image
                        src={user?.image}
                        alt={user?.name}
                        width={48}
                        height={48}
                        className=" ring-primary ring-offset-base-50 w-24 rounded-full ring-1 ring-offset-2"
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