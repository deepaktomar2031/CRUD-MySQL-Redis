const checkRedisCache = require("./middlewares/checkRedisCache.js");
const authMiddleware = require("./middlewares/auth.middleware.js");
const getStudentData = require("./controllers/getStudentData.controller.js");
const getStudentById = require("./controllers/getStudentById.controller.js");

const routes = (router) => {
    router.get("/api/auth-endpoint", authMiddleware);
    router.get("/api/student/", getStudentData);
    router.get("/api/student/:id", checkRedisCache, getStudentById);
};

module.exports = routes;
