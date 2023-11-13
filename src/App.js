import styles from './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import RoutesWrapper from './routes/RoutesWrapper'
import ScrollToTop from "./components/ScrollToTop";
const App = () =>{
  return (
      <div className={styles.app}>
        <BrowserRouter>
            <ScrollToTop />
            <RoutesWrapper />
        </BrowserRouter>
      </div>
  );
}

export default App;
