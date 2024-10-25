import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Componentes/Home/Home';
import { Register } from './Componentes/Register/Register';
import GlobalStyle from './Global';

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cadastro" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;