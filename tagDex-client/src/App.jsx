/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import Header from '../components/Header';
import Home from '../routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostDetail from '../routes/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <PostDetail />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <div
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '1rem',
          }}
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
