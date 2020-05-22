const development = {
  ENVIRONMENT: 'development',
  ROADRY_DATABASE_URL: process.env.ROADRY_DEV_DATABASE_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
  SEND_GRID_API_KEY: process.env.SEND_GRID_API_KEY,
  APPLICATION_BASE_URL: 'https://stagingapplication.roadery.com',
  NOTIFICATION_SENDER: 'sikirumoshood@gmail.com',
  TWILIO_SID: process.env.TWILIO_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER
};

export default development;
