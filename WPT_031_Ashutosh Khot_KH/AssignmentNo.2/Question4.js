const express = require("express");
const app = express();

app.use(express.static("sf"));
let datapara = {
    host: "localhost",
    user: "ashutosh",
    password: "cdac123",
    database: "practice",
    port: 3306
};
const mysql = require("mysql2");
const conn = mysql.createConnection(datapara);


app.get("/getdata", (req, resp) => {
    let datafound = { status: false, data: [] };
    let pincode = req.query.pincode;
    console.log(pincode);
    conn.query("select areaname ,pincode from pinarea where pincode=?", [pincode], (err, rows) => {
        if (err) {
            console.log("Error Occured");
        } else {
            if (rows.length > 0) {
                //console.log("Hello");
                console.log(rows[0].areaname + " " + rows[0].pincode + " ");
                datafound.status = true;
                datafound.data = rows;
            }
        }
        console.log(datafound.status)
        resp.send(datafound);
    });

});
app.listen(500, function () {
    console.log("server running at port 500")
});