const dbConnection = require("../config/db.config.js");

const getStudentData = (req, res) => {
    const queryString = "SELECT * FROM Student";
    try {
        dbConnection().query(queryString, (err, rows, field) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ Message: "Something Went Wrong" });
            }
            if (rows.length > 0) {
                console.log("Information fetched successfully of all students ");
                res.status(200).json(rows);
            } else {
                console.log("no student found saved in table");
                return res.status(200).send();
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ Message: "Something Went Wrong" });
    }
};

module.exports = getStudentData;
