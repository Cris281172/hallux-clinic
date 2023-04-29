import styles from './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import RoutesWrapper from './routes/RoutesWrapper'
const App = () =>{
  return (
      <div className={styles.app}>
        <BrowserRouter>
            <RoutesWrapper />
        </BrowserRouter>
      </div>
  );
}

export default App;
