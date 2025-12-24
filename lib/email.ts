/**
 * Service d'envoi d'emails via le microservice EmailPro
 */

import type { ContactFormData } from './validation'

// Configuration de l'API EmailPro
const EMAILPRO_API_URL = process.env.NEXT_PUBLIC_EMAILPRO_API_URL || 'http://localhost:3001'
const EMAILPRO_API_KEY = process.env.NEXT_PUBLIC_EMAILPRO_API_KEY

/**
 * Envoie un email de demande de contact au psychologue via EmailPro API
 */
export async function sendContactEmail(data: ContactFormData) {
  const consultationTypes = {
    'première-consultation': 'Première consultation',
    'suivi-adulte': 'Suivi adulte',
    'adolescent': 'Adolescent (16 ans et +)',
    'autre': 'Autre',
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #2D3748;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #4A90E2 0%, #7EC4B6 100%);
          color: white;
          padding: 30px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: #ffffff;
          padding: 30px;
          border: 1px solid #E7E5E4;
          border-top: none;
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: 600;
          color: #44403C;
          margin-bottom: 5px;
        }
        .field-value {
          color: #2D3748;
          padding: 10px;
          background: #F5F5F4;
          border-radius: 4px;
        }
        .message-box {
          background: #F5F5F4;
          padding: 15px;
          border-radius: 4px;
          border-left: 4px solid #4A90E2;
          margin-top: 10px;
        }
        .footer {
          background: #F5F5F4;
          padding: 20px;
          border-radius: 0 0 8px 8px;
          text-align: center;
          font-size: 12px;
          color: #78716C;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">Nouvelle demande de contact</h1>
        <p style="margin: 10px 0 0 0;">Via le formulaire du site web</p>
      </div>

      <div class="content">
        <div class="field">
          <div class="field-label">Nom complet :</div>
          <div class="field-value">${data.firstName} ${data.lastName}</div>
        </div>

        <div class="field">
          <div class="field-label">Email :</div>
          <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>

        <div class="field">
          <div class="field-label">Téléphone :</div>
          <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>

        <div class="field">
          <div class="field-label">Type de consultation :</div>
          <div class="field-value">${consultationTypes[data.consultationType]}</div>
        </div>

        <div class="field">
          <div class="field-label">Message :</div>
          <div class="message-box">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>

      <div class="footer">
        <p>Ce message a été envoyé depuis le formulaire de contact de votre site web.</p>
        <p>Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
        <p style="margin-top: 15px;">
          <strong>Rappel RGPD :</strong> Ces informations sont confidentielles et doivent être traitées conformément au RGPD.
        </p>
      </div>
    </body>
    </html>
  `

  try {
    const response = await fetch(`${EMAILPRO_API_URL}/api/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${EMAILPRO_API_KEY}`,
      },
      body: JSON.stringify({
        subject: `Nouvelle demande de contact - ${data.firstName} ${data.lastName}`,
        message: emailHtml,
        replyTo: data.email,
        senderName: `${data.firstName} ${data.lastName}`,
        metadata: {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          consultationType: consultationTypes[data.consultationType],
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Erreur API EmailPro:', errorData)
      throw new Error(`EmailPro API error: ${response.status}`)
    }

    const result = await response.json()
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email via EmailPro:', error)
    throw new Error('Erreur lors de l\'envoi de l\'email')
  }
}

/**
 * Note: L'email de confirmation au patient est maintenant géré automatiquement
 * par le microservice EmailPro si la configuration SITE_xxx_SEND_CONFIRMATION est activée.
 * Cette fonction n'est plus nécessaire.
 */
