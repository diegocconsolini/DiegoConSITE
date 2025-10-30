"use server"

interface ContactFormData {
  name: string
  email: string
  company?: string
  challengeType?: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Missing required fields" }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Invalid email format" }
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission from DiegoCon Website

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ""}
${data.challengeType ? `Challenge Type: ${data.challengeType}` : ""}

Message:
${data.message}

---
Sent from DiegoCon Contact Form
    `.trim()

    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "DiegoCon Website <noreply@diegocon.nl>",
      to: "contact@diegocon.nl",
      replyTo: data.email,
      subject: `New Contact Form: ${data.name} - ${data.challengeType || "General Inquiry"}`,
      text: emailContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
