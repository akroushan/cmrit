var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookmarkSchema = new Schema({
	url : { type : String, default : "" },
	read : { type : Boolean, default : false },
	count : { type : Number, default : 1 },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);