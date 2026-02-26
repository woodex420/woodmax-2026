import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
);

// Example WhatsApp API route: fetch recent chat messages
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // multi-tenant: allow optional header x-tenant-id
      const tenant = req.headers['x-tenant-id'] as string | undefined;
      // this example ignores tenant; real implementation would filter
      const { data, error } = await supabase.from('whatsapp_conversations').select('*');
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ error: 'Unexpected error' });
    }
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
