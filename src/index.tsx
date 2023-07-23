import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';
import Artikel from './pages/Artikel';
import Arunasdc from './pages/Arunasdc';
import Rumaharuna from './pages/Rumaharuna';
import Workshop from './components/Workshop';
import Daftar from './components/Daftar';
import Detailartikel from './components/artikels/Detailartikel';
import Register from './components/Register';
import Register2 from './components/kontakkami/Register2';
import Kurikulum from './pages/Kurikulum';
import Detailprogram from './components/rumaharuna/Detailprogram';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'tentang',
        element: <Tentang />,
      },
      {
        path: 'kontak',
        element: <Kontak />,
      },
      {
        path: 'artikel',
        element: <Artikel />,
      },
      {
        path: 'artikel/detail-artikel',
        element: <Detailartikel />,
      },
      {
        path: 'rumah-aruna',
        element: <Rumaharuna />,
      },
      {
        path: 'rumah-aruna/program',
        element: <Detailprogram />,
      },
      {
        path: 'rumah-aruna/kurikulum',
        element: <Kurikulum />,
      },
      {
        path: 'aruna-SDC',
        element: <Arunasdc />,
      },
      {
        path: 'aruna-SDC/workshop',
        element: <Workshop />,
      },
      {
        path: 'Aruna-SDC/Workshop/register',
        element: <Register />,
      },
      {
        path: 'Daftar',
        element: <Daftar />,
      },
      {
        path: 'Detail-Artikel',
        element: <Detailartikel />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'register2',
        element: <Register2 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
