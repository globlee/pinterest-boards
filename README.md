 
##Pinterest-boards

Web scraping with request and cheerio to get list of pinterest boards for a user.



 ```js
var findboards = require('pinterest-boards');


	//display is the user's page name, pinterest.com/XXXXX

	findboards(display, function(err, boards){
		if (err){

		} else {
			pinterest.boards = boards;
		}
	})


 ```

