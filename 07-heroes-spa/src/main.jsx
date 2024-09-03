import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
} from 'react-router-dom';
import './styles.css';
import { HeroesApp } from './HeroesApp';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <HeroesApp />,
//     },
// ]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
            <HeroesApp />
        </BrowserRouter>
    </StrictMode>,
);
