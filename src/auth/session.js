const session = require("express-session")
const devCookieSettings = {
  maxAge: (60 * 60000)
};
const sessionOptions = {
  name: "Repository Management",
  secret: '2C44-4D44-WppQ38S',
  proxy: true,
  cookie: devCookieSettings,
  //store: new RedisStore({ client: redisClient }),
  saveUninitialized: false,
  resave: false
};

module.exports = session(sessionOptions)