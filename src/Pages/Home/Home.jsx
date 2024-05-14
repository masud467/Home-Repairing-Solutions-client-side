import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Repairing Solutions|Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;