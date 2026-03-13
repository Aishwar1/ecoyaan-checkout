import data from "@/data/mockData.json";

export async function GET() {
  return Response.json(data);
}