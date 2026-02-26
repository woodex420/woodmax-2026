/**
 * API Abstraction Layer for Master Admin Dashboard
 * 
 * This service layer abstracts all database operations to allow seamless switching
 * between Supabase and any new ecommerce API backend.
 * 
 * MIGRATION GUIDE:
 * When connecting a new ecommerce API:
 * 1. Replace the implementation of each function to call your new API endpoints
 * 2. Maintain the same function signatures and return types
 * 3. Update the client initialization at the bottom of this file
 * 4. No changes needed in page components - they will automatically use the new backend
 * 
 * Example migration:
 * OLD: const { data } = await supabase.from('products').select('*')
 * NEW: const { data } = await fetch('/api/products').then(r => r.json())
 */

import { supabase, getSupabaseAnonKey } from '../lib/supabase';
import type {
  Profile,
  Product,
  Customer,
  Quotation,
  Order,
  Delivery,
  Return,
  WhatsAppMessage,
  AnalyticsDaily,
  Inventory,
  StockMovement,
} from '../lib/supabase';

/**
 * Products API Operations
 * Table: products
 */
export const products = {
  async list(limit = 50) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(product: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async getCount() {
    const { count, error } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Customers API Operations
 * Table: customers
 */
export const customers = {
  async list(limit = 100) {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(customer: Partial<Customer>) {
    const { data, error } = await supabase
      .from('customers')
      .insert([customer])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Customer>) {
    const { data, error } = await supabase
      .from('customers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('customers')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async getCount() {
    const { count, error } = await supabase
      .from('customers')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Orders API Operations
 * Tables: orders, order_items, order_status_history
 */
export const orders = {
  async list(limit = 50) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        customer:customers(*)
      `)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        customer:customers(*)
      `)
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async getItems(orderId: string) {
    const { data, error } = await supabase
      .from('order_items')
      .select(`
        *,
        product:products(*)
      `)
      .eq('order_id', orderId);
    if (error) throw error;
    return data || [];
  },

  async create(order: Partial<Order>) {
    const { data, error } = await supabase
      .from('orders')
      .insert([order])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async updateStatus(id: string, status: string, notes?: string) {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getCount() {
    const { count, error } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Quotations API Operations
 * Tables: quotations, quotation_items
 */
export const quotations = {
  async list(limit = 50) {
    const { data, error } = await supabase
      .from('quotations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('quotations')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async getItems(quotationId: string) {
    const { data, error } = await supabase
      .from('quotation_items')
      .select('*')
      .eq('quotation_id', quotationId);
    if (error) throw error;
    return data || [];
  },

  async updateStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from('quotations')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getCount() {
    const { count, error } = await supabase
      .from('quotations')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Deliveries API Operations
 * Table: deliveries
 */
export const deliveries = {
  async list(limit = 50) {
    const { data, error } = await supabase
      .from('deliveries')
      .select(`
        *,
        order:orders(
          *,
          customer:customers(*)
        )
      `)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('deliveries')
      .select(`
        *,
        order:orders(*)
      `)
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Delivery>) {
    const { data, error } = await supabase
      .from('deliveries')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getCount() {
    const { count, error } = await supabase
      .from('deliveries')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Returns API Operations
 * Table: returns
 */
export const returns = {
  async list(limit = 50) {
    const { data, error } = await supabase
      .from('returns')
      .select(`
        *,
        order:orders(
          *,
          customer:customers(*)
        )
      `)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('returns')
      .select(`
        *,
        order:orders(*)
      `)
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Return>) {
    const { data, error } = await supabase
      .from('returns')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getCount() {
    const { count, error } = await supabase
      .from('returns')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Inventory API Operations
 * Tables: inventory, stock_movements
 */
export const inventory = {
  async list(limit = 100) {
    const { data, error } = await supabase
      .from('inventory')
      .select(`
        *,
        product:products(*)
      `)
      .order('stock_quantity', { ascending: true })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getByProductId(productId: string) {
    const { data, error } = await supabase
      .from('inventory')
      .select('*')
      .eq('product_id', productId)
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Inventory>) {
    const { data, error } = await supabase
      .from('inventory')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async recordMovement(movement: Partial<StockMovement>) {
    const { data, error } = await supabase
      .from('stock_movements')
      .insert([movement])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getMovements(productId: string, limit = 10) {
    const { data, error } = await supabase
      .from('stock_movements')
      .select('*')
      .eq('product_id', productId)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getCount() {
    const { count, error } = await supabase
      .from('inventory')
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
  },
};

/**
 * Analytics API Operations
 * Table: analytics_daily
 */
export const analytics = {
  async getDaily(limit = 30) {
    const { data, error } = await supabase
      .from('analytics_daily')
      .select('*')
      .order('date', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getLatest() {
    const { data, error } = await supabase
      .from('analytics_daily')
      .select('*')
      .order('date', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    return data;
  },
};

/**
 * WhatsApp API Operations
 * Tables: whatsapp_conversations, whatsapp_campaigns, whatsapp_analytics
 */
export const whatsapp = {
  async listConversations(limit = 50) {
    const { data, error } = await supabase
      .from('whatsapp_conversations')
      .select(`
        *,
        customers(full_name, email)
      `)
      .order('last_message_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async listCampaigns(limit = 20) {
    const { data, error } = await supabase
      .from('whatsapp_campaigns')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async getAnalytics(limit = 30) {
    const { data, error } = await supabase
      .from('whatsapp_analytics')
      .select('*')
      .order('metric_date', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },
};

/**
 * Profiles API Operations
 * Table: profiles
 */
export const profiles = {
  async getById(id: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

/**
 * Authentication API Operations
 * Supabase Auth
 */
export const auth = {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};

/**
 * Master API Client Export
 * This object aggregates all API modules for easy access throughout the admin dashboard
 * 
 * Usage in components:
 * import { api } from '../services/api'
 * const products = await api.products.list()
 * const order = await api.orders.getById(id)
 */
export const api = {
  products,
  customers,
  orders,
  quotations,
  deliveries,
  returns,
  inventory,
  analytics,
  whatsapp,
  profiles,
  auth,
  // Helper to get anon key for edge functions
  getAnonKey: getSupabaseAnonKey,
};

export default api;
