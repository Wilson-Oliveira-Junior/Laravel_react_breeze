import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto min-h-screen flex items-start justify-center">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="relative max-w-[525px] mx-auto overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <img src="/img/logo.png" alt="Logo da Intranet" className="logo" />
                            </div>
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="
                                           border-[#E9EDF4]
                                            w-full
                                            rounded-md
                                            border
                                            bg-[#FCFDFE]
                                            py-3
                                            px-5
                                            text-base
                                            text-body-color
                                            placeholder-[#ACB6BE]
                                            outline-none
                                            focus:border-primary
                                            focus-visible:shadow-none
                                        "
                                    />
                                </div>
                                <div className="flex">
                                    <span className="text-red-400 text-sm m-2 p-2">error</span>
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="
                                            border-[#E9EDF4]
                                            w-full
                                            rounded-md
                                            border
                                            bg-[#FCFDFE]
                                            py-3
                                            px-5
                                            text-base
                                            text-body-color
                                            placeholder-[#ACB6BE]
                                            outline-none
                                            focus:border-primary
                                            focus-visible:shadow-none
                                        "
                                    />
                                </div>
                                <div className="flex">
                                    <span className="text-red-400 text-sm m-2 p-2">error</span>
                                </div>
                                <div className="mb-10">
                                    <button
                                        type="submit"
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            bg-indigo-500
                                            hover:bg-indigo-700
                                            rounded-md
                                            text-white
                                        "
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <Link
                                to="/forgot-password"
                                className="
                                    mb-2
                                    inline-block
                                    text-base
                                    text-[#adadad]
                                    hover:text-primary
                                    hover:underline
                                "
                            >
                                Forgot Password?
                            </Link>
                            <p className="text-base text-[#adadad]">
                                Not a Member yet?{" "}
                                <Link to="/register" className="text-primary hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
