var {con} = require('./util');

con.connect(function(err)  {
    if (err) throw err;
    
    con.query("SELECT * FROM department", function (err, departments, fields) {
        if (err) throw err;
        console.log(departments);
        console.log(fields);
        
    }
    );
})