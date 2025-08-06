export default async function handler(req, res) {
  try {
    const response = await fetch('https://umami-mas.vercel.app/share/r4q43H5GVOjVOW3u.json');

    const text = await response.text(); // Read raw response as text
    console.log('🔍 Raw response from Umami:', text); // Log it

    // Try parsing only if it's valid JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (jsonError) {
      throw new Error('Upstream did not return valid JSON');
    }

    res.setHeader('Access-Control-Allow-Origin', 'https://mohammed-adnan-shakeel.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    res.status(200).json(data);
  } catch (error) {
    console.error('❌ Proxy error:', error);
    res.status(500).json({ error: 'Proxy failed', details: error.message });
  }
}
