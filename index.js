var request = require("request");
var cheerio = require('cheerio');
module.exports = function(display, callback){

    var options = {
      url: "https://www.pinterest.com/"+display,
      method: 'GET',
      followRedirect: false,
      json: false,
      timeout:20000,
    };

    var myboards = [];

    request(options, function(error, response, body) {
      if (error){

      	callback(error, null)

      } else {

      	var $ = cheerio.load(body);

      	$(".boardLinkWrapper").each(function(i) {

				var aboard = $(this).attr('href');
				var boardname = aboard.split("/")[aboard.length-1];
				//console.log("PINTEREST FOUND BOARD1/2: ", aboard, boardname)


				var options2 = {
			      url: "https://www.pinterest.com/"+aboard,
			      method: 'GET',
			      followRedirect: false,
			      json: false,
			      timeout:20000,
			    };

			    var putboard = {
			    	uri:aboard,
			    	id:''
			    };

			    request(options2, function(error2, response2, body2) {
			      if (error){
			      
			      } else {
			      	body2 = body2 + "";

			      	putboard.id = body2.split('"board_id": "')[1].split('"')[0];
			      	//console.log("PINTEREST FOUND BOARD2/2: ", putboard);
			      	myboards.push(putboard);
			      	if (i == $(".boardLinkWrapper").length -1){
			      		
			      		callback(null, myboards);
			      	}
			      	



			      	
			      }
			    });
			


		});

      }
    });


};