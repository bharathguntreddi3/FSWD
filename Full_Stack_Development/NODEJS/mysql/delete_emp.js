var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "delete from employees where salary = ?",
    [120000],
    function (err, result) {
      if (err) throw err;
      console.log(result)
      if(result.affectedRows === 0)
         console.log("Sorry! employee id not found!")
      else
         console.log("Deleted employee!")
      con.end()
    }
  );
}
);
 