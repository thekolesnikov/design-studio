import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './components/HomePage/HomePage';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
