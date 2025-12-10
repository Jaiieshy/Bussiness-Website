import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { TilesPage } from './components/TilesPage';
import { MarblesPage } from './components/MarblesPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'tiles':
        return <TilesPage />;
      case 'marbles':
        return <MarblesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
