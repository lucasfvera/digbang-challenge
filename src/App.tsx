/**
 * Import the main view component and wrap it with
 * the Providers, Routers, etc
 */
import {BrowserRouter as Router} from 'react-router-dom'
import AppView from './view/AppView';

const App = () => {
  return <>
    <Router>
      <AppView />
    </Router>
  </>
}

export default App;