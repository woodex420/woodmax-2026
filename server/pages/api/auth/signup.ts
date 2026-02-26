import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password, displayName } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password required' });
  }

  try {
    const { data, error } = await supabase.auth.signUpWithPassword({ 
      email, 
      password,
      options: {
        data: {
          display_name: displayName || email.split('@')[0],
        }
      }
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json({ 
      user: data.user,
      message: 'Account created successfully'
    });
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected error during signup' });
  }
}
