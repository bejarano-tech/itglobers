// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Link = {
  slug: string,
  title: string
}

type Data = {
  links: Link[]
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  var resp: Data = {
    links: [
      { slug: 'viva-air', title: 'Viva Air' },
      { slug: 'avianca', title: 'Avianca' },
      { slug: 'wingo', title: 'wingo' },
      { slug: 'latam', title: 'Latam' },
      { slug: 'areolineas-argentinas', title: 'Areolineas Argentinas' }
    ]
  };
  res.status(200).json(resp);
}
