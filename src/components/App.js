import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/practice" component={() => <div>Practice</div>} />
          <Route exact path="/import" component={() => <div>Import</div>} />
          <Route exact path="/history" component={() => <div>History</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
