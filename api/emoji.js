export default function handler(req, res) {
  const START_ID = 157926;
  const TOTAL = 10000;

  const page = parseInt(req.query.page || "1");
  const limit = parseInt(req.query.limit || "100");

  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, TOTAL);

  const data = [];

  for (let i = startIndex; i < endIndex; i++) {
    const id = START_ID + i;
    data.push({
      id,
      url: `https://files.kick.com/emotes/${id}/fullsize`
    });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    start_id: START_ID,
    total: TOTAL,
    page,
    limit,
    data
  });
}
