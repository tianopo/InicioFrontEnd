declare namespace NodeJS {
  interface ProcessEnv {
    BACK_HOST: string
    BACK_PORT: string
    BACK_PATH: string
    NODEMAILER_HOST: string
    NODEMAILER_PORT: string
    NODEMAILER_SECURE: string
    NODEMAILER_AUTH_USER: string
    NODEMAILER_AUTH_PASSWORD: string
    NODEMAILER_FROM: string
  }
}
