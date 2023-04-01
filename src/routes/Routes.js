import {Routes, Route} from 'react-router-dom';
import Layout from "../layouts/Layout";

const Routes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>

            </Route>
        </Routes>
    )
}

export default Routes;