import type { HttpResponse } from "@azure/functions";

export default async (): Promise<HttpResponse> => Promise.resolve({
  status: 200,
  body: true,
});
