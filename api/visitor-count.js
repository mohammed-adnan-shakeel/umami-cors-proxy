export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const token = "yEytBsvGwYdAOtvh"; 
  const websiteId = "8b3ce781-d545-4fa6-84d0-17201616071a"; 
  const url = `https://umami-mas.vercel.app/api/websites/${websiteId}/stats`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error("Fetch failed:", response.status);
      throw new Error("Failed to fetch stats");
    }

    const data = await response.json();
    const visitors = data?.pageviews?.value ?? 0;

    res.status(200).json({ visitors });
  } catch (error) {
    console.error("Proxy error:", error.message);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
}




