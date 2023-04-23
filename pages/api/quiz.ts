import type { NextApiRequest, NextApiResponse } from 'next'

type Quiz = {
  markers: { question: string }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quiz>
) {
  res.status(200).json({ markers: [] });
}