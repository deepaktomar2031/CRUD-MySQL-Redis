const dbConnection = require("../config/db.config.js");

const getStudentById = (req, res) => {
    try {
        const { id } = req.params;
        const queryString = `SELECT * FROM Student where id=${id}`;
        dbConnection().query(queryString, async (err, rows, field) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            if (rows.length > 0) {
                console.log("Served from DB");
                await redisClient.set(id, JSON.stringify(rows));
                return res.status(200).json(rows);
            } else {
                console.log("no student found saved in table");
                return res.status(200).send(`no student found with id ${id}`);
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ Message: "Something Went Wrong" });
    }
};

module.exports = getStudentById;
