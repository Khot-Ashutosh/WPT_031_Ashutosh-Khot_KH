let dbparams = {
    port: 3306,
    host: "localhost",
    user: "ashutosh",
    password: "cdac123",
    database: "practice"
};
const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);

let itemno = 10;
let itemname = "book";
let price = 100;
let category = "School";

con.query("insert into item (itemno,itemname,price,category) values(?,?,?,?)", [itemno, itemname, price, category], (err, res1) => {
    if (err) {
        console.log("Error while inserting");
    } else {
        console.log("Successful insertion" + res1.affectedRows);
    }

});

