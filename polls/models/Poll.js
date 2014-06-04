/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-06-04
* Time: 05:55 PM
* To change this template use Tools | Templates.
*/
var mongoose = require('mongoose');

// Subdocument schema for votes
var voteSchema = new mongoose.Schema({ ip: 'String' });

// Subdocument schema for poll choices
var choiceSchema = new mongoose.Schema({ 
	text: String,
	votes: [voteSchema]
});

// Document schema for polls
exports.PollSchema = new mongoose.Schema({
	question: { type: String, required: true },
	choices: [choiceSchema]
});