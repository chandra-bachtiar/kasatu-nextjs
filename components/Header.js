import Head from "next/head";
import React from "react";

const Header = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>KASATU | UMC</title>
                <link rel="icon" href="https://www.umc.ac.id/wp-content/uploads/2014/11/UMC-1-1008x1024.png"></link>
            </Head>
        </div>
    );
};

export default Header;
