export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // In a real deployment, you'd store req.body in a DB/Sheet here.
  // For now, we just acknowledge receipt.
  const payload = req.body;

  // Minimal sanity check
  if (!payload || !payload.meta || !payload.measures) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  return res.status(200).json({ ok: true, received_at: new Date().toISOString() });
}
