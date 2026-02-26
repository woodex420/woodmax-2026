import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase.from('knowledge_base').select('*');
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ error: 'Unexpected error' });
    }
  }
  if (req.method === 'POST') {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'title and content required' });
    try {
      const { data, error } = await supabase.from('knowledge_base').insert({ title, content });
      if (error) return res.status(500).json({ error: error.message });
      return res.status(201).json(data);
    } catch (err) {
      return res.status(500).json({ error: 'Unexpected error' });
    }
  }
  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
