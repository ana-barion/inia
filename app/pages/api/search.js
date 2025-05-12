import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Missing query parameter" });
  }

  const searchQuery = groq`
    *[_type == "news" && (title match $queryString || description match $queryString)] {
      _id,
      title,
      description,
      date,
      slug,
      type,
      featured,
      "imageURL": image.asset->url
    }
  `;

  try {
    const results = await client.fetch(searchQuery, { queryString: query });
    res.status(200).json(results);
  } catch (err) {
    console.error("Sanity fetch error:", err);
    res.status(500).json({ message: "Search failed", error: err.message });
  }
}
