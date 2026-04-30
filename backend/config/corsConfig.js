// config/corsConfig.js

const allowedOrigins = [
  "http://localhost:3000",
  "https://placement-ai-eight.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(null, true); // don't block (safe fallback)
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

module.exports = corsOptions;