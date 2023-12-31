import { _experimental_VercelKvApl } from "@saleor/app-sdk/APL/vercel-kv";
import { SaleorApp } from "@saleor/app-sdk/saleor-app";

/**
 * By default auth data are stored in the `.auth-data.json` (FileAPL).
 * For multi-tenant applications and deployments please use UpstashAPL.
 *
 * To read more about storing auth data, read the
 * [APL documentation](https://github.com/saleor/saleor-app-sdk/blob/main/docs/apl.md)
 */
export const apl = new _experimental_VercelKvApl();

export const saleorApp = new SaleorApp({
  apl,
});
