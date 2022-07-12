import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../containers/Home";
import Page2 from "../containers/Page2";
import NotFound from "../containers/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path= '/' element={<Home/>}/>
                <Route exact path="/Page2" element={<Page2/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;