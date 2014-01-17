
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  
  var MongoClient = require('mongodb').MongoClient, format = require('util').format;
MongoClient.connect('mongodb://lumi:Fibonacci1234@dharma.mongohq.com:10073/gidimongo', function (err, db) {
    if(err) throw err;

time = Date.now();
    var collection = db.collection('firstcollection');
    collection.insert({a:time}, function(err, docs) {
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
    });
});

  res.render('helloworld', { title: 'Hello, World!' });


};