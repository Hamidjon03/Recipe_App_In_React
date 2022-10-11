import Pages from "./pages/Pages"
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Category />
      <Pages />
    </BrowserRouter>
  );
}
//pafaxi4592@deitada.com
export default App;
