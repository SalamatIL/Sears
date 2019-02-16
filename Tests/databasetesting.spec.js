//DB connection
var pgp = require('pg-promise')(/*options*/);  

describe('database testing', () => {

    var connectionString = {
        host:'localhost',
        port: 5432,
        database: 'hr',
        user: 'postgres',
        password: 'abc'
    }

    var db = pgp(connectionString);
    var arr=[];

    it('my query', () => {
        db.any('SELECT last_name FROM employees WHERE employee_id=107')
        .then(function(result){
            arr=result;
        })
        .catch(function(error){
            console.log(error);
        })
        .then(function(){
            //all our automation code will be here
            console.log(arr);
            console.log(arr[0].last_name);
        })
    })

})