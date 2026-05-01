const allowedOrigins = [
  "https://placement-ai-eight.vercel.app",
  "https://placement-ai-git-main-sanuths-projects-b65f89aa.vercel.app",
  "https://placement-7ervovdna-sanuths-projects-b65f89aa.vercel.app"
];

const isLocalhostOrigin = (origin) =>
  /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || isLocalhostOrigin(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
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