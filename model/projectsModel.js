const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ProjectSchema=new Schema({
     projectname:{
        type: String,
        required: true
     },
     tel:{
        type: String,
        required: true
     },
     email:{
        type: String,
        required: true
     },
     details:{
        type: String,
        required: true
     }
   
},{
    timestamps:true
});

module.exports=mongoose.model('Project', ProjectSchema);

