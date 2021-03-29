const session = require("express-session");
const redis = require("redis");
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});
let RedisStore = require("connect-redis")(session);
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
  store: new RedisStore({ client: redisClient }),
  resave: false
};

module.exports = session(sessionOptions);