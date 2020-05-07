const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
          if(!validator.isEmail(value)){
             throw new Error('Email is envalid')
          }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
              throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true, 
        validate(value){
          if(value < 6 || value.toLowerCase().includes('password')){
            throw new Error('password not valid') 
          }
        }

    }
})

// const me = new User({
//     name: '  Sara   ',
//     email: 'MyEMAIL@YEARS.COM  ',
//     password: '1234567'
// })

// me.save().then(() => {
//     console.log(me);   
// }).catch((error) => {
//     console.log('Error', error);   
// })


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true, 
        trim: true
    }, 
    completed: {
        type: Boolean, 
        default: false
    }
})

const task = new Task({
    description: '666    ',
    completed: true
})

task.save().then(() => {
    console.log(task);   
}).catch((error) => {
    console.log('Error', error);
})