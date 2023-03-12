import {FallbackPageWrapper} from "react-current-page-fallback";
import Footer from "../../common/footer";
import Navbar from "../../common/navbar";

const About = () => {
    return (
        <FallbackPageWrapper>
            <Navbar/>
            
            <Footer/>
        </FallbackPageWrapper>
    )
};

export default About;
