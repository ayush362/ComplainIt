import React from "react";

export const HeroSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col gap-6 justify-center items-center text-center">
                <h1 className="font-bold text-5xl text-blue-500">ComplainIt</h1>
                <h2 className="text-lg w-96 text-gray-700">
                    ComplainIt is a platform where you can share your complaints and reviews about any product or service.
                </h2>
                <div className="flex gap-6">
                    <a href="/login">
                        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
                            Sign In
                        </button>
                    </a>
                    <a href="/register">
                        <button className="bg-white text-blue-500 py-2 px-6 rounded-lg border border-blue-500 hover:bg-gray-100">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};
