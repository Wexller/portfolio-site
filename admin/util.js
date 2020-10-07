const bcrypt = require("bcrypt");
const { User } = require("../models");
const redis = require("redis");
const session = require("express-session");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();
const crypto = require("crypto");

const sessionStorage = {
  store: new RedisStore({
    client: redisClient,
  }),
  secret: "this is secret",
  resave: false,
};

async function authenticate(email, password) {
  const userRecord = await User.findOne({
    where: { email },
  });
  if (userRecord) {
    const matched = await bcrypt.compare(
      password,
      userRecord.encryptedPassword
    );
    if (matched) {
      return userRecord;
    }
  }
  return false;
}

/**
 *
 * @param string
 * @return {string}
 */
function makeMd5Hash(string) {
  return crypto.createHash("md5").update(string).digest("hex");
}

module.exports = {
  authenticate,
  sessionStorage,
  makeMd5Hash,
};
