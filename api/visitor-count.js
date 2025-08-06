export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // ✅ Add this line

  const websiteId = "8b3ce781-d545-4fa6-84d0-17201616071a";
  const apiToken = process.env.UMAMI_API_TOKEN;
  const startAt = 1622505600000;
  const endAt = Date.now();

  try {
    const response = await fetch(
      `https://umami-mas.vercel.app/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch stats" });
    }

    const data = await response.json();
    return res.status(200).json({ visitors: data.pageviews.value });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
