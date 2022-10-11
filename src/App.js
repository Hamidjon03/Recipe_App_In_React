import Pages from "./pages/Pages"
import Category from "./components/Category";
import Search from "./components/Search";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}
//pafaxi4592@deitada.com
export default App;
