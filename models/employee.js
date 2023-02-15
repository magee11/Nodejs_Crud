const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:false
    },
    companyname:{
        type:String,
        required:false
    }
},
{
    timestamps:true,
}
)

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee