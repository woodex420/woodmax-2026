import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome, {user?.displayName || user?.email}</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 border-red-200"
        >
          Logout
        </Button>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
          <div className="space-y-2">
            <a href="/admin" className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium">
              Dashboard
            </a>
            <a href="/admin/products" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
              Products
            </a>
            <a href="/admin/knowledge" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
              Knowledge Base
            </a>
            <a href="/" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-blue-600">
              Back to Store
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
