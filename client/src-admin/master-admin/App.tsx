import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { supabase, type Profile } from './lib/supabase';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

// Layout
import DashboardLayout from './layouts/DashboardLayout';

/**
 * Master Admin Application
 * 
 * This is the main entry point for the master admin dashboard.
 * It handles authentication, profile management, and routing to all admin pages.
 * 
 * To use this instead of the main app, update your main.tsx:
 * import App from './master-admin/App'
 * 
 * Future API Migration:
 * - Replace supabase client with your new API client
 * - Update profile fetching logic to call your new auth endpoint
 * - All page components will automatically work with the new backend through the api.ts layer
 */

function App() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface-base">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-text-primary border-r-transparent"></div>
          <p className="mt-4 text-text-primary">Loading Master Admin...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <DashboardLayout profile={profile}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage profile={profile} />} />
        
        {/* TODO: Add remaining page routes as they are implemented
          <Route path="/products" element={<ProductsPage profile={profile} />} />
          <Route path="/customers" element={<CustomersPage profile={profile} />} />
          <Route path="/quotations" element={<QuotationsPage profile={profile} />} />
          <Route path="/orders" element={<OrdersPage profile={profile} />} />
          <Route path="/inventory" element={<InventoryPage profile={profile} />} />
          <Route path="/deliveries" element={<DeliveriesPage profile={profile} />} />
          <Route path="/returns" element={<ReturnsPage profile={profile} />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/whatsapp" element={<WhatsAppPage profile={profile} />} />
          <Route path="/analytics" element={<AnalyticsPage profile={profile} />} />
          <Route path="/settings" element={<SettingsPage profile={profile} />} />
        */}
        
        {/* Catch all - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
