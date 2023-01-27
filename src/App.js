import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Routes/Routes/Routes';

function App() {

  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
