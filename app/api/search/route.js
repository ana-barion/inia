import { client } from '@/sanity/lib/client';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get('term');

  if (!term) {
    return new Response(
      JSON.stringify({ error: 'Missing search term' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const results = await client.fetch(
      `*[
  _type in ["teamMember", "leadershipMember", "contactPage", "page", "sciencePage"] &&
  (
    name match $term ||
    title match $term ||
    description match $term ||

    scientificApproach.title match $term ||
    scientificApproach.subtitle match $term ||

    threeMinutesSection.title match $term ||
    threeMinutesSection.subtitle match $term ||
    threeMinutesSection.description match $term ||

    whyItMatters.title match $term ||
    whyItMatters.content match $term
  )
]{
  _id,
  _type,
  title,
  name,
  slug,
  "url": select(
    _type == "teamMember" => "/team/",
    _type == "leadershipMember" => "/team/",
    _type == "contactPage" => "/contact",
    _type == "page" => "/" + slug.current,
    _type == "sciencePage" => "/science"
  )
}
`,
      { term: `${term}*` }
    );

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Search API error:', err);
    return new Response(
      JSON.stringify({ error: 'Search failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
