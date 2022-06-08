const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
                require:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    year : {
        type : Number,
        default : 2021
    }, 
    authorName:{type:String,
                require:true
    } , 
    
    totalPage: String,
    stockAvailable: Boolean,
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


