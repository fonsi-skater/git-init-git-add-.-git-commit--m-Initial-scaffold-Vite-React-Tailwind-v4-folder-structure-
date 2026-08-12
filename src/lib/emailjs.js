import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER
const TEMPLATE_VISITOR = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VISITOR
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendInquiryEmails({ from_name, from_email, message }) {
  const params = { from_name, from_email, message }

  await emailjs.send(SERVICE_ID, TEMPLATE_OWNER, params, PUBLIC_KEY)
  await emailjs.send(SERVICE_ID, TEMPLATE_VISITOR, params, PUBLIC_KEY)
}
