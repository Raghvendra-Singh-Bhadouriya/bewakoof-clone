import { Routes, Route } from 'react-router-dom'
import Home from '../body/pages/Home'
import Login from '../body/pages/Login';
import SignUp from '../body/pages/Signup';
import SingleProduct from '../body/pages/singleProduct';

const AllRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/product-detail/:id" element={<SingleProduct/>}/>
        </Routes>
    )
}

export default AllRoutes;