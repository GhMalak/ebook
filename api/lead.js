export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const numeros = [
    { numero: process.env.WHATSAPP_01, label: "WHATSAPP 01" },
    { numero: process.env.WHATSAPP_02, label: "WHATSAPP 02" },
    { numero: process.env.WHATSAPP_03, label: "WHATSAPP 03" },
    { numero: process.env.WHATSAPP_04, label: "WHATSAPP 04" },
  ].filter(n => n.numero);

  if (numeros.length === 0) {
    return res.status(500).json({ error: 'Nenhum número configurado' });
  }

  const sorteado = numeros[Math.floor(Math.random() * numeros.length)];

  const {
    gclid = '',
    click_id = '',
    timestamp_unix = Date.now(),
    url_completa = '',
    utm_source = '',
    utm_medium = '',
    utm_campaign = '',
    utm_term = '',
    utm_content = '',
    emoji = ''
  } = req.body || {};

  try {
    await fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chave_emoji: emoji,
        emoji,
        timestamp_unix,
        time: timestamp_unix,
        gclid_isolado: gclid,
        gclid,
        url_completa,
        "MEU WHATSAPP": sorteado.label,
        whatsapp: sorteado.label,
        whatsapp_numero: sorteado.numero,
        click_id,
        Contato: click_id,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
      })
    });
  } catch (e) {
    console.error('Erro ao enviar para n8n:', e);
  }

  return res.status(200).json({
    whatsapp_numero: sorteado.numero,
    waLabel: sorteado.label
  });
}
