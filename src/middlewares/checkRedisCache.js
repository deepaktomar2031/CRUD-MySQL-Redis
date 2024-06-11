const redisClient = require("./../config/redis.js");

const checkRedisCache = (req, res, next) => {
    const { id } = req.params;
    redisClient.get(id, (err, data) => {
        if (err) {
            console.log("something went wrong", err);
            return;
        }
        if (data != null) {
            console.log("Served from Redis");
            res.status(200).json(JSON.parse(data));
        } else {
            next();
        }
    });
};

module.exports = checkRedisCache;
