const Project=require('../model/projectsModel');
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

            const count=await Project.count();
            return res.render('home', {
               message, 
               projects,
               current: page,
               pages: Math.ceil(count/perPage)
                
          
          });
         
      } catch (error) {

          console.log('Error:', error);
          
      }

    
}

 