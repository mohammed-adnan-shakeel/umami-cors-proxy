export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const url = "https://umami-mas.vercel.app/share/yEytBsvGwYdAOtvh/mohammed-adnan-shakeel.github.io.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const visitors = data?.pageviews?.value ?? 0;

    res.status(200).json({ visitors });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
}
