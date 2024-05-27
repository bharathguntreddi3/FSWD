var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "update employees  set salary  = ? where fullname = ?",
    [6000000, 'Robert Iger'],
    function (err, result) {
      if (err) throw err;
      console.log(result)
      if(result.affectedRows === 0)
         console.log("Sorry! employee id not found!")
      else
         console.log("Updated employee!")
      con.end()
    }
  );
}
);
 