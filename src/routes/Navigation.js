import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import SchoolPage from '../components/SchoolPage'

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/school' element={<SchoolPage />} />
            </Routes>
        </BrowserRouter>
    )
}