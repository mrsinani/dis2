"use server";
import { JsonBinResponse } from "@/types/Affiliates";

const API_KEY = process.env.JSONBIN_API_KEY;

export async function fetchData(): Promise<JsonBinResponse> {
  if (!API_KEY) {
    throw new Error("No Key");
  }

  const res = await fetch(
    `https://api.jsonbin.io/v3/b/69864260d0ea881f40a62d4f`,
    {
      headers: {
        "X-Master-Key": API_KEY,
      },
    },
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `JSONBin request failed: ${res.status} ${res.statusText}${detail ? ` — ${detail}` : ""}`,
    );
  }

  return res.json();
}
