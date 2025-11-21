import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './pages/HomePage';
import { AuthProvider, useAuth } from './context/AuthContext';

// Simple protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

// Admin page component
const AdminPage = React.lazy(() => import('./pages/AdminPage'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/admin"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </Router>
  );
}

export default App;
