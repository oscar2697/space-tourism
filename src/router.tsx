import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './views/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    }
])
