export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const token = "yEytBsvGwYdAOtvh";
  const slug = "mohammed-adnan-shakeel.github.io";
  const url = `https://umami-mas.vercel.app/share/${token}/${slug}.json`;

  try {
    const rsp = await fetch(url);
    if (!rsp.ok) throw new Error("Failed to fetch share JSON");
    const data = await rsp.json();
    const visitors = data.pageviews?.value ?? 0;
    return res.status(200).json({ visitors });
  } catch {
    return res.status(500).json({ error: "Failed to fetch share stats" });
  }
}
