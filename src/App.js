import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { Overview } from './pages/overview';
import {Destination} from './pages/destination';

function App() {
  return (
 <Router>
    <Switch>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Overview} />
              <Route exact path="/destination/:id" component={Destination} />
            </Switch>
          </AnimatePresence>)}
      />
    </Switch>
  </Router>
  );
}

export default App;
