export default async function handler(req, res) {
  const response = await fetch('https://umami-mas.vercel.app/share/r4q43H5GVOjVOW3u.json');
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', 'https://mohammed-adnan-shakeel.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  res.status(200).json(data);
}
