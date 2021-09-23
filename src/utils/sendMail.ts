import nodemailer from 'nodemailer'

interface sendMyNotificationInterface {
  nome: string,
  email: string,
  token: string,
}
export default async function sendMyNotification({
    nome,
    email,
    token

}: sendMyNotificationInterface): Promise<void> {
  const trasporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'rafaelagenciapremium@gmail.com',
      pass: ''
    }
  })
  await trasporter.sendMail({
    from: 'Rafael Carvalho Rosina <rafaelcl1497@gmail.com>',
    to: 'rafaelcl1497@gmail.com',
    subject: 'Verificação de E-mail - SOLITE ',
    html: `
      <p style="margin-bottom:22px; font-size: 18px" >
        E-mail para verificação de conta na plataforma SOLITE, verificar no botão abaixo
      </p>
        <form method="post" action="http://localhost:3000/verification">
        <button type="submit">Verificar Agora</button>
        </form>

      <p style="margin-bottom:22px; font-size: 18px" >
        <strong>Nome: </strong>${nome}<br/>
        <strong>Email: </strong>${email}<br/>
        <strong>Email: </strong>${token}<br/>
      </p>
    `
  })
}
