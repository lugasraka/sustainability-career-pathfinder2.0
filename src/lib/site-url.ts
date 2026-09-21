const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

export const SITE_URL = envUrl
  ? envUrl.startsWith("http")
    ? envUrl
    : `https://${envUrl}`
  : "http://localhost:3000";
