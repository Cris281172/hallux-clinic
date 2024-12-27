import React, { useEffect } from 'react';
import styles from './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './routes/RoutesWrapper';
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";
import Assistant from "./components/assistant/Assistant";
import setUserInfo from "./helpers/user-info/setUserInfo";

const App = () => {

    useEffect(() => {
        setUserInfo()
    })

    return (
        <div className={styles.app}>
            <Helmet>
                <title>Podolog Łódź Hallux Clinic - Pogotowie Podologiczne</title>
                <meta name="description" content="Stopy to w dalszym ciągu wstydliwy temat, dlatego w swojej pracy staram się, aby każdy pacjent czuł się komfortowo i pozytywnie." />
            </Helmet>
            <BrowserRouter>
                <ScrollToTop />
                <RoutesWrapper />
                {/*<Assistant />*/}
            </BrowserRouter>
        </div>
    );
};

export default App;