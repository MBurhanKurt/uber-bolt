import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <Home />
    </div>
  );
}

export default App;