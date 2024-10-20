import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useLogoutMutation } from "@/slices/usersApliSlice";
import { logout } from "@/slices/authSlice";
import Link from "next/link";
export const Navbar = () => {
    const [isClient, setIsClient] = useState(false);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();
    const [logoutApiCall] = useLogoutMutation();

    useEffect(() => {
        setIsClient(true); // Ensures this runs only on the client
    }, []);

    const logoutHanlder = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="bg-blue-500 h-16">
            <nav className="container mx-auto flex justify-between items-center h-full px-4">
                <div className="text-white font-bold text-xl cursor:pointer">
                    {userInfo ? (
                        <>
                            <a href="/dashboard">ComplainIt</a>
                        </>
                    ) : (
                        <>
                            <a href="/">ComplainIt</a>
                        </>
                    )}
                </div>
                <div>
                    <ul className="flex gap-8 text-white font-medium">
                        <li>
                            <a href="/profile" className="hover:text-blue-300">
                                Profile
                            </a>
                        </li>
                        <li className="hover:text-blue-300">Complains</li>
                        <li className="hover:text-blue-300">Reviews</li>
                    </ul>
                </div>
                <div className="flex gap-6">
                    {isClient && userInfo ? (
                        <>
                            <Link href="/profile">
                                <p className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100">
                                    {userInfo.name}
                                </p>
                            </Link>
                            <button
                                onClick={logoutHanlder}
                                className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100"
                            >
                                logout
                            </button>
                        </>
                    ) : (
                        <>
                            <a href="/login">
                                <button className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100">
                                    Sign In
                                </button>
                            </a>
                            <a href="/register">
                                <button className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100">
                                    Sign Up
                                </button>
                            </a>
                        </>
                    )}
                </div>
            </nav>
        </section>
    );
};
