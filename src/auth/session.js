const session = require("express-session");
const redis = require("redis");
const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});
let RedisStore = require("connect-redis")(session);
const devCookieSettings = {
  maxAge: (60 * 60000),
  secure: false,
  httpOnly: false,
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

redisClient.on('connect', function (err) {
  console.log('Connected to redis successfully');
});

module.exports = session(sessionOptions);