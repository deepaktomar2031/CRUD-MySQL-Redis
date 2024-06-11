const authMiddleware = (req, res, next) => {
    console.log(req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization == "my-api-key-123") {
        return res.status(200).send("Authorized!");
    } else {
        return res.status(401).send("Not Authorized");
    }
};

module.exports = authMiddleware;
