/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import Header from '../components/Header';
import Home from '../routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
