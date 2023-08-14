import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import darkModeReducer from './redux/toggleReduxer'


const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    },

})

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)