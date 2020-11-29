import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Practice from './ui/Practice';
import Import from './ui/Import';
import Home from './ui/Home';

function App() {
  console.log("PUBLIC_URL", process.env.PUBLIC_URL)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />          
          <Route exact path="/practice" component={Practice} />
          <Route exact path="/import" component={Import} />
          <Route exact path="/history" component={() => <div>History</div>} />          
          {/* Redirect all 404's to home */}
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
