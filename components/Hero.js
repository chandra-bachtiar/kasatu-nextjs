/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center text-center custom-img bg-cover bg-center">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
            <main className="px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center">
                    <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        `<span class="text-indigo-600 font-bold">KASATU</span>`
                                    )
                                    .deleteChars(6)
                                    .pauseFor(300)
                                    .typeString(
                                        `<span class="text-indigo-600 font-bold">K1'20</span> Teknik Informatika`
                                    )
                                    .pauseFor(2500)
                                    .start();
                            }}
                        />
                    </h2>
                    <h3 className="text-2xl tracking-tight leading-10 font-medium sm:text-3xl text-white sm:leading-none md:text-4xl">
                        Universitas Muhammadiyah Cirebon
                    </h3>
                    <p className="mt-3 text-white sm:mt-5 italic sm:text-md font sm:max-w-xl sm:mx-auto md:mt-5">
                        " {props.text} "
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex justify-center">
                        <div className="rounded-md shadow">
                            <a
                                href="http://umc.ac.id"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                            >
                                Website UMC
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Hero;
