export const FEEDBACK_URL = "https://tally.so/r/eq4zBE";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lugasraka/";

export function feedbackUrl(context: {
  source: "footer" | "results";
  path?: string;
}): string {
  const url = new URL(FEEDBACK_URL);
  url.searchParams.set("source", context.source);
  if (context.path) url.searchParams.set("path", context.path);
  return url.toString();
}
