let datab = {
    port: 3306,
    host: "localhost",
    user: "ashutosh",
    password: "cdac123",
    database: "practice"
};
let status = true;
const mysql = require("mysql2");
const con = mysql.createConnection(datab);
con.query("select resourceId,resourcename,status from resource where status=?", [status], (err, rows) => {
    if (err) {
        console.log("error while fetching data");
    } else {
        if (rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                console.log(rows[i].resourceId + " " + rows[i].resourcename + " " + rows[i].status);
            }
        } else {
            console.log("no rows returned");
        }
    }
});