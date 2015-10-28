/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var me = {
	id: 0,
	name: "me",
	age: 23,
	mutualfriends: 2,
	interests: ['biking', 'dancing'],
	imgURL: 'NaN'
};

var user1 = {
	id: 1,
	name: "Ali",
	age: 22,
	mutualfriends: 2,
	interests: ['hockey', 'biking'],
	imgURL: '/images/users/1/ali_main.jpg'
};

var user2 = {
	id: 2,
	name: "Alyssa",
	age: 27,
	mutualfriends: 3,
	interests: ['dancing', 'eating'],
	imgURL: '/images/users/2/alyssa_main.jpg'
};

var user3 = {
	id: 3,
	name: "Hannah",
	age: 22,
	mutualfriends: 7,
	interests: ['guys', 'hockey'],
	imgURL: '/images/users/3/hannah_main.jpg'
};
var user4 = {
	id: 4,
	name: "Jessica",
	age: 23,
	mutualfriends: 22,
	interests: ['dancing', 'biking'],
	imgURL: '/images/users/4/jessica_main.jpg'
};
var user5 = {
	id: 5,
	name: "Nina",
	age: 21,
	mutualfriends: 3,
	interests: ['nothing', 'ihavenolife'],
	imgURL: '/images/users/5/nina_main.jpg'
};
var user6 = {
	id: 6,
	name: "Dana",
	age: 15,
	mutualfriends: 5,
	interests: ['awww', 'yeeeee'],
	imgURL: '/images/users/6/dana_main.jpg'
};


var users = [me, user1, user2, user3, user4, user5, user6];

module.exports = {


	/* To populate the table in JSON
	 * Locally using MongoDB
	 */
	start: function(req, res) {

		Tinder.create(users)
		.exec(function usersCreated(err, tinders) {

			if(err)
				console.log(err);
			else {
				console.log("in else")
				return res.redirect('/tinder/card')
			}
		});
	},


	'1': function(req,res) {

		res.view();
	},

	card: function(req,res) {
		Tinder.find(function foundUsers(err, tinders) {
			if(err)
				return next(err);
			res.view({
				tinder: tinders
			});
		});

	},















};
