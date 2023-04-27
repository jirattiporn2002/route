import Home from './Home';
import Contact from './Contact';
import About from './About';
import Post from './Post';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

export default function Firstpage(){
    return (<>
    <BrowserRouter>
    <div>
        <ul>
            <li><Link to = "/" >Home</Link></li>
            <li><Link to = "/about" >About</Link></li>
            <li><Link to = "/contact" >Contact Us</Link></li>
            <li><Link to = "/Post/" >All Post</Link></li>
            <li><Link to = "/Post/1" >item1</Link></li>
            <li><Link to = "/Post/2" >item2</Link></li>
            <li><Link to = "/Post?name=Jirattiporn&surname=Roekruen">Greeting</Link></li>
        </ul>
    </div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Post" element={<Post/>}/>
        <Route path="/Post/:id" element={<Post/>}/>
    </Routes>
    </BrowserRouter>
    </>);
}