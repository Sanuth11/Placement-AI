const corsOptions = {
  origin: (origin, callback) => callback(null, true),
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false
};

module.exports = corsOptions;