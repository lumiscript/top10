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
  
  res.render('playlist', { title: 'Playlist Search' });

};

exports.showplaylist = function(db) {
    return function(req, res) {

        var response = {"tracks": [{"url": "Oyari ft Tiwa Savage.mp3", "is_external": false, "title": "Oyari ft Tiwa Savage", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/siduction-art1.jpg", "plays": 10616, "artist": {"name": "Dr. SID", "slug": "dr-sid"}, "slug": "TGuqWk", "album": {"title": "Siduction", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/siduction-art1.jpg", "slug": ""}, "id": 2483}, {"url": "Tonga ft. Sarkodie.mp3", "is_external": false, "title": "Tonga ft. Sarkodie", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/joey-b-tonga-ft-sarkodie.jpg", "plays": 9202, "artist": {"name": "Joey B", "slug": ""}, "slug": "LJ6rcL", "album": {"title": "Tonga (single)", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/joey-b-tonga-ft-sarkodie.jpg", "slug": ""}, "id": 2485}, {"url": "Won Da Mo ft D'banj.mp3", "is_external": false, "title": "Won Da Mo ft D'banj", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Burna-Boy-V-1710x1280.jpg", "plays": 19897, "artist": {"name": "Burna Boy", "slug": "burna-boy"}, "slug": "l3OZqk", "album": {"title": "Won Da Mo (Single)", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Burna-Boy-V-1710x1280.jpg", "slug": "won-da-mo-single"}, "id": 2436}, {"url": "Body ft Banky W.mp3", "is_external": false, "title": "Body ft Banky W", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/bodyart.jpg", "plays": 16634, "artist": {"name": "Black Magic", "slug": "black-magic"}, "slug": "xn5nzh", "album": {"title": "Version 2.0", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/bodyart.jpg", "slug": ""}, "id": 2437}, {"url": "Away.mp3", "is_external": false, "title": "Away", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/iya.jpg", "plays": 7224, "artist": {"name": "Iyanya", "slug": "iyanya"}, "slug": "2uKIIP", "album": {"title": "Single", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/iya.jpg", "slug": ""}, "id": 2504}, {"url": "Ayayaa.mp3", "is_external": false, "title": "Ayayaa", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/ayayaa-2.jpg", "plays": 9028, "artist": {"name": "E.L", "slug": "el"}, "slug": "PcNx4c", "album": {"title": "Ayayaa", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/ayayaa-2.jpg", "slug": ""}, "id": 2452}, {"url": "Surulere ft Don Jazzy.mp3", "is_external": false, "title": "Surulere ft Don Jazzy", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Dr-SID-Don-Jazzy-Surulere-Art.jpg", "plays": 27737, "artist": {"name": "Dr SID ", "slug": ""}, "slug": "TF3hBA", "album": {"title": "Siduction", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Dr-SID-Don-Jazzy-Surulere-Art.jpg", "slug": "Siduction"}, "id": 2337}, {"url": "Eledumare .mp3", "is_external": false, "title": "Eledumare ", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/wiz.jpg", "plays": 13588, "artist": {"name": "Wizkid", "slug": "wizkid"}, "slug": "qNDiKx", "album": {"title": "Single - Eledumare", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/wiz.jpg", "slug": ""}, "id": 2476}, {"url": "Someone Special ft. Burnaboy x AKA.mp3", "is_external": false, "title": "Special Someone ft. Burnaboy x AKA", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/IMG-20130828-WA002.jpg", "plays": 6680, "artist": {"name": "Sarkodie", "slug": "sarkodie"}, "slug": "TKw4U6", "album": {"title": "Sarkology", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/IMG-20130828-WA002.jpg", "slug": ""}, "id": 2492}, {"url": "Available.mp3", "is_external": false, "title": "Available", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/AyoJay.jpg", "plays": 18406, "artist": {"name": "Ayo Jay ", "slug": "ayo-jay"}, "slug": "7OCKxi", "album": {"title": "single", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/AyoJay.jpg", "slug": ""}, "id": 2397}], "title": "Weekly Top10", "number_of_plays": 31897, "tracks_order": "2483,2485,2436,2437,2504,2452,2337,2476,2492,2397", "created_at": "2013-03-07T06:00:00Z", "owner": {"name": "Admin"}, "id": 1, "slug": "cloudafrica"}
        var playlistSlug = req.body.slug;
        //console.log(playlistSlug);

         var playerObject = function(myobject) {
            
            console.log(myobject.tracks[3]);


        }
      
        for(i=0; i < response.tracks.length; i++)
                {
                   // console.log('Trackname: %s \nArtist: %s \n \n', response.tracks[i].title, response.tracks[i].artist.name );

                }
 
        
        
        request('http://gplayer.herokuapp.com/api/playlist/'+playlistSlug, function (error, response, body) {
          if (!error && response.statusCode == 200) {
        
            parsedBody = JSON.parse(body);
            playerObject(parsedBody);
        

          }
        });

             
//save it to file
      //  request('http://gplayer.herokuapp.com/api/playlist/'+playlistSlug).pipe(fs.createWriteStream("response.json"));

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
