import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
    const res = await fetch(
        `https://zenzapis.xyz/randomtext/motivasi?apikey=${process.env.APIKEY}`
    );
    const data = await res.json();
    return {
        props: { motivasi: data.result.message },
    };
};

export default function Home({ motivasi }) {
    return (
        <>
            <Hero text={motivasi} />
        </>
    );
}
