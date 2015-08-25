 
##Pinterest-boards

Web scraping with request and cheerio to get list of pinterest boards and IDs for a user.



 ```js
var findboards = require('pinterest-boards');


	//display is the user's page name, pinterest.com/XXXXX

	findboards(display, function(err, boards){
		if (err){

		} else {
			user.pinterest.boards = boards;

			/*
			Returned boards format (array of objects)

			boards = [{
				uri: '/display-name/board-name',
				id:'board ID'
			}, {
				uri: '/display-name/board-name',
				id:'board ID'
			}]

			 */
		}
	})


 ```

