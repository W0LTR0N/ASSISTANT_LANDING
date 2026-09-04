export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const b = req.body || {};
  const text =
`🚀 НОВАЯ ЗАЯВКА WOLTRON

Имя: ${b.name || '—'}
Телефон/Telegram: ${b.contact || '—'}
Компания: ${b.company || '—'}
Ниша: ${b.niche || '—'}
Интерес: ${b.interest || '—'}
Решение: ${b.solution || '—'}
Источник: ${b.source || '—'}
Дата: ${b.date || '—'}`;
  const r = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }) });
  res.status(r.ok ? 200 : 502).json({ ok: r.ok });
}