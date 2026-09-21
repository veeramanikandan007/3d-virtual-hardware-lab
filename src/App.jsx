import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Workbench } from './pages/Workbench';
import { Projects } from './pages/Projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Workbench');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={setCurrentPage} />;
      case 'Login':
        return <Login onLogin={() => setCurrentPage('Workbench')} />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Workbench':
        return <Workbench />;
      case 'Projects':
        return <Projects />;
      default:
        return <Workbench />;
    }
  };

  return (
    <AppLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </AppLayout>
  );
}
