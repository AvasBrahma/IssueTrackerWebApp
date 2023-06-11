const Project=require('../model/projectsModel');
const Issue=require('../model/issueModel');
const mongoose=require('mongoose');


module.exports.viewProjectIssue=async(req, res)=>{

  
     const projects= await Project.findOne({_id: req.params.id});
     console.log('View project Isse req body :', projects);
 
    const message=await req.flash('info')[0];
    console.log(message);

     let perPage=12;
     // if we don't get nunber the default value will be 1

     let page=req.query.page||1;
     try {
          //To get the records sorted by at Updated
         //const issue=await Issue.aggregate([{ $sort: { updatedAt: -1 }}])
         const issue = await Issue.find({ project: projects._id }).sort({ updatedAt: -1 })
           .skip(perPage * page - perPage)
           .limit(perPage)
           .exec();

           const count=await Issue.count();
           return res.render('projects/issue/viewIssue', {
              message, 
              projects,
              issue,
              current: page,
              pages: Math.ceil(count/perPage)
               
         
         });
        
     } catch (error) {

         console.log('Error:', error);
         
     }
 
 }

 module.exports.viewCreateIssue=async(req, res)=>{
    try {
       const projects= await Project.findOne({_id: req.params.id});
 
       res.render('projects/issue/createIssue',{
          projects
       });
       
    } catch (error) {
         console.log('Error', error);
    }

}
 

//post Issue in DB
module.exports.addIssue=async(req, res)=>{
    
    console.log(req.body);
    const projectId=req.body.projectid;
    const path="/projects/issue/{projectId}"
    console.log("Path::" , path);

    try {

        const project=await Project.findById(req.body.projectid);
       
          if(project){
               const newIssue= new Issue({
                    title: req.body.title,
                    description:req.body.description,
                    label:req.body.label,
                    author:req.body.author,
                    project:req.body.projectid
                 });
               await Issue.create(newIssue);



          }
        await req.flash('info', 'New Issue Added');
        res.redirect('/projects/issue/' + projectId);
        
     } catch (error) {
          console.log('Error:', error);
     }


    
}

module.exports.viewEdit= async(req, res)=>{

     try {
        const issue= await Issue.findOne({_id: req.params.id});
  
        res.render('projects/issue/edit', {
           issue
        });
        
     } catch (error) {
          console.log('Error', error);
     }
  
  }
