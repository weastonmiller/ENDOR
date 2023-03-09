/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import Header from '../components/Header';
import Home from '../routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostDetail from '../routes/PostDetail';
import Browse from '../routes/Browse';
import { Upload } from '../routes/Upload';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <PostDetail />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/browse/:id',
    element: <Browse />,
  },
  {
    path: '/upload',
    element: <Upload />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#389e0d',
          },
        }}
      >
        <div
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '1rem',
          }}
        >
          <Header />
          <div
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              padding: '1rem',
              backgroundColor: 'white',
              marginTop: '55px',
            }}
          >
            <RouterProvider router={router} />
          </div>
        </div>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
