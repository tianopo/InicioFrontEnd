import express from 'express';
import * as nodemailer from 'nodemailer';

const app = express();

function nodemailerTransporter(): nodemailer.Transporter {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: "matheuslink18@gmail.com",
      pass: "4Queijos!",
    },
  });

  return transporter;
}

const enviarEmail = async () => {
  const transporter = nodemailerTransporter();
  try {
    await transporter.sendMail({
      from: 'matheuslink18@gmail.com',
      to: 'matheuslink18@hotmail.com',
      subject: 'assunto',
      text: 'dfdfdfd',
      html: '<p>oi</p>',
    });
    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
  } finally {
    transporter.close();
  }
};

app.post('/enviar-email', async (_, res) => {
  try {
    await enviarEmail();
    res.status(200).send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    res.status(500).send('Erro ao enviar o e-mail.');
  }
});

export const enviarEmailParaServidor = async () => {
  try {
    const response = await fetch('http://localhost:3002/enviar-email', {
      method: 'POST',
    });

    if (response.ok) {
      console.log("E-mail enviado com sucesso!");
    } else {
      console.error("Erro ao enviar o e-mail.");
    }
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
  }
};
