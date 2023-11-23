// Desc: This is the main app component
import './App.css'
import {Route, Routes} from 'react-router-dom';
import IndexPage from './Pages/LoginPage.jsx';
import Layout from './Layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  )
}

export default App
