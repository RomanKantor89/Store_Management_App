var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: { type: String, unique: true },
    password: String,
    userType: { type: String, default: 'customer'}, //Can be 'admin' or 'customer'
    firstName: String,
    lastName: String,
    email: String,
    phone: { type: String, unique: true },
    address: [
        {
            houseNum: String,
            streetName: String,
            province: String,
            postalCode: String
        }
    ],
    order: [{
        orderStatus: String,
        service: [{
            name: String,
            itemList: [
                {
                    item: {
                        name: String,
                        price: Number
                    },
                    quantity: Number
                }
            ]
        }]
    }],
    card: {
        currBalance: Number,
        activity: [
            {
                activityType: {
                    type: String,
                    default: 'payment'
                }, //Can be 'payment' or 'load'
                amount: Number,
                orderId: String, //If activityType is payment
                loadType: {
                    type: String,
                    default: 'Debit' //Can be 'Debit' 'Credit' 'Paypal'
                },
                timeStamp: Number
            }
        ]
    },
    claims: [String]

});

user = mongoose.model('user',userSchema);
