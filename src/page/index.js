import {Navigate} from 'react-router-dom';
import {FallbackPageWrapper} from "react-current-page-fallback";

const Root = () => {
    return (
        <FallbackPageWrapper>
            <Navigate to={"/af"} replace={true}/>
        </FallbackPageWrapper>
    );
}

export default Root;
