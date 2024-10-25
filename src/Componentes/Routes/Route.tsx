import {Routes, Route} from  'react-router-dom'
import { Home } from '../Home/Home'
import { Register } from '../Register/Register'

export function Router(){

    <Routes>
        <Route path='login' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='cadastro' element={<Register/>}/>
    </Routes>


}