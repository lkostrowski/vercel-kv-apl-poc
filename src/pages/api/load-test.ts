import { NextApiRequest, NextApiResponse } from "next";
import { saleorApp } from "../../saleor-app";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers.saleorApiUrl === undefined) {
    return res.status(400).send({
      error: "saleorApiUrl header is required",
    });
  }

  const authData = await saleorApp.apl.get(req.headers.saleorApiUrl as string);

  return res.send({
    url: authData?.saleorApiUrl,
  });
}
