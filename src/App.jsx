
import { Route, Routes } from 'react-router-dom'
import "./app.css"

import HomePage from "./components/HomePage.jsx"
import EditTask from "./components/EditTask"
const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit/:id" element={<EditTask />} />

            </Routes>

        </>
    )
}
export default App
