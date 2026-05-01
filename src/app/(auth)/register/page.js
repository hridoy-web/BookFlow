"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc";
import { IoMdStar } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {

    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log("Form Submitted");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        // console.log({ name, email, image, password });

        const { data, error } = await authClient.signUp.email({
           name,
           email,
           image,
           password,
        });

       if(error){
        toast.warning(error.message);
        return;
       } else{
        toast.success('Registration Successful')

        setTimeout(()=>{
            router.push('/login')
        }, 1000)
       }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 py-16 px-4">
            <div className="card w-full max-w-md shadow-lg bg-base-100">
                <div className="card-body">

                    <h2 className="text-3xl font-bold text-center text-primary mb-6">Register Now</h2>


                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="flex items-center gap-1 font-semibold"><IoMdStar size={10} className="text-red-500" /> Name:</span>
                            </label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="flex gap-1 items-center font-semibold"><IoMdStar size={10} className="text-red-500" /> Email</span>
                            </label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="flex items-center gap-1 font-semibold"><IoMdStar size={10} className="text-red-500" /> Photo URL</span>
                            </label>
                            <br />
                            <input
                                type="url"
                                name="image"
                                placeholder="Profile Image Link"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="flex items-center gap-1 font-semibold"><IoMdStar size={10} className="text-red-500" /> Password:</span>
                            </label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary font-bold text-lg w-full">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <button className="btn btn-outline btn-primary w-full gap-2">
                        <FcGoogle size={20} /> Continue with Google
                    </button>

                    <p className="text-center mt-4 text-base font-medium">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-bold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;