import { Helmet } from 'react-helmet';
import { Header } from './components/Header';
import RoutesApp from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <RoutesApp />
    </>
  );
}

export default App;
