import type { NextApiRequest, NextApiResponse } from 'next';

// Marketplace API stub: e.g. list sellers
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // TODO: implement marketplace listing
    return res.status(200).json({ message: 'marketplace endpoint placeholder' });
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
