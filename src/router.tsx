import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './views/Home'
import Destination from './views/Destination'
import Crew from './views/Crew'
import Technology from './views/Technology'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'destination',
                element: <Destination />
            },
            {
                path: 'crew',
                element: <Crew />
            },
            {
                path: 'technology',
                element: <Technology />
            }
        ]
    }
])
