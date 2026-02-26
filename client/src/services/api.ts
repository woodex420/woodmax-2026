// Shared API abstraction used by both shop and admin

const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path: string, options: RequestInit = {}) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  // Add authorization token if available
  const token = localStorage.getItem('auth_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    ...options,
    headers,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json();
}

export const products = {
  list: () => request('/products'),
  getById: (id: string) => request(`/products/${id}`),
  // TODO: add create/update/delete
 };
export const orders = {
  list: () => request('/orders'),
  getById: (id: string) => request(`/orders/${id}`),
  // additional methods to follow
};

export const customers = {
  list: () => request('/customers'),
  getById: (id: string) => request(`/customers/${id}`),
};

// other modules will be added later

export const knowledge = {
  list: () => request('/knowledge'),
  create: (item: { title: string; content: string }) =>
    request('/knowledge', {
      method: 'POST',
      body: JSON.stringify(item),
    }),
};

export const auth = {
  login: (email: string, password: string) => request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }),
  signup: (email: string, password: string, displayName?: string) => request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password, displayName }),
  }),
  logout: () => request('/auth/logout', { method: 'POST' }),
  getSession: () => request('/auth/session'),
};

// Store token in localStorage for persistence
export const tokenManager = {
  setToken: (token: string) => localStorage.setItem('auth_token', token),
  getToken: () => localStorage.getItem('auth_token'),
  clearToken: () => localStorage.removeItem('auth_token'),
};

export const api = { products, orders, customers, knowledge, auth, tokenManager };
