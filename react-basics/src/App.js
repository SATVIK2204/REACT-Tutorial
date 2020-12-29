import logo from './logo.svg';
import './App.css';

import Stylesheet from './components/15_styling_css';
import Inline from './components/15_inline_styling';
import './15_appStyle.css'
import styles from './15_appStyle.module.css'
function App() {
  return (
    <div className="App">
    {/* <Stylesheet primary={true}/> */}
    <h1 className="error">Error</h1>
    <h1 className={styles.success}>Success</h1>
    {/* <Inline/> */}
    </div>
  );
}

export default App;
