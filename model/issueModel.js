const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const IssueSchema=new Schema({
     title:{
        type: String,
        required: true
     },
     description:{
        type: String,
        required: true
     },
     label:{
        type: String,
        required: true
     },
     author:{
        type: String,
        required: true
     },
     project:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
   
},{
    timestamps:true
});

module.exports=mongoose.model('Issue', IssueSchema);
