var Search = require('../models/searchModel.js');

module.exports = {
	
  search: function(req, res, next) {
    var search = req.body;

    console.log(req.body);
    if (req.body.default) {
      console.log('Inside Random');
    	Search.search.getAllRandom(function(err, results) {
    		if (!err) {
    			res.json(results);
    		} else {
    			res.json(err);
    		}
    	})
    } else {
    	Search.search.getAllItems(search, function(err, results) {
    		if (!err) {
    			res.json(results);
    		} else {
    			res.json(err);
    		}
    	})
    }
  }  

};
