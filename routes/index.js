var request = require('request');
var fs = require("fs");


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.insertsong = function(db) {
    return function(req, res){
           var collection = db.get('songs');
           
    // Submit to the DB
        collection.insert({
            "title" : 'Song Title',
            "artist" : 'Song Artist',
            "songpath" : 'Song Path'
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header 
              res.send("successful");
              
              
            }
        });   

    };
    //end Submit to DB

};


exports.playlistSearch = function(req, res){

        console.log(req.params.slug);

           var playerObject = function(myobject) {
            
              for(i=0; i < myobject.tracks.length; i++)
                {
                    console.log('Song ID: %s \nPlays: %s \nTrackname: %s \nArtist: %s \n \n', myobject.tracks[i].id, myobject.tracks[i].plays, myobject.tracks[i].title, myobject.tracks[i].artist.name );
                    
                    // res.redirect("/");
                    res.render('playlist', { mydata: myobject.tracks });

                } 
        }

         request('http://gplayer.herokuapp.com/api/playlist/'+req.params.slug, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            
            parsedBody = JSON.parse(body);
            playerObject(parsedBody);
            
          }
        });           
   
};

exports.showplaylist = function(req, res, db) {
    return function(req, res) {

        var playlistSlug = req.body.slug;
        

        var playerObject = function(myobject) {
            
              for(i=0; i < myobject.tracks.length; i++)
                {
                    console.log('Song ID: %s \nPlays: %s \nTrackname: %s \nArtist: %s \n \n', myobject.tracks[i].id, myobject.tracks[i].plays, myobject.tracks[i].title, myobject.tracks[i].artist.name );

                } 
        }
        
        request('http://gplayer.herokuapp.com/api/playlist/'+playlistSlug, function (error, response, body) {
          if (!error && response.statusCode == 200) {
        
            parsedBody = JSON.parse(body);
            playerObject(parsedBody);
            
          }
        });


    };
};

exports.userlist = function(db) {
    return function(req, res) {
        var collection = db.get('firstcollection');
        collection.find({},{},function(e,docs){
            res.render('userlist', {
                "userlist" : docs
            });
        });
    };
};

exports.newuser = function(req, res){
  res.render('newuser', { title: 'Add New User' });
};


exports.adduser = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var userName = req.body.username;
        var userEmail = req.body.useremail;

        // Set our collection
        var collection = db.get('firstcollection');

        // Submit to the DB
        collection.insert({
            "username" : userName,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("userlist");
                // And forward to success page
                res.redirect("newuser");
            }
        });

    }
};

exports.top10 = function(req, res){
  
  res.render('newuser', { title: 'Test Top 10' });

};
