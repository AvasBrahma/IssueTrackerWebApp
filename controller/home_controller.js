const Project=require('../model/projectsModel');
const Issue=require('../model/issueModel');
const mongoose=require('mongoose');

// module.exports.home= async (req,res)=> {

//      const message=await req.flash('info')[0];
//      console.log(message);
//       try {
//           // quering into database to get all the list of projects
//           const projects= await Project.find({}).limit(22);
//           return res.render('home', {message, projects});
//       } catch (error) {

//           console.log('Error:', error);
          
//       }

    
// }

module.exports.home= async (req,res)=> {

     const message=await req.flash('info')[0];
     console.log(message);

      let perPage=12;
      // if we don't get nunber the default value will be 1

      let page=req.query.page||1;
      try {
           //To get the records sorted by at Updated
          const projects=await Project.aggregate([{ $sort: { updatedAt: -1 }}])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();
          
            const locals={
                title:"Home"
            }


            const count=await Project.count();
            return res.render('home', {
               message, 
               projects,
               current: page,
               locals,
               pages: Math.ceil(count/perPage)
                
          
          });
         
      } catch (error) {

          console.log('Error:', error);
          
      }

    
}


module.exports.renderAllIssue= async (req,res)=> {

    let perPage=12;
    let page=req.query.page||1;
    try {
        const issue=await Issue.aggregate([{ $sort: { updatedAt: -1 }}])
          .skip(perPage * page - perPage)
          .limit(perPage)
          .exec();

           
          const locals={
            title:"Issue"
        }

          const count=await Issue.count();
          return res.render('allissue', {
             issue,
             current: page,
             locals,
             pages: Math.ceil(count/perPage)
        });
       
    } catch (error) {
        console.log('Error:', error);
    }

}
 