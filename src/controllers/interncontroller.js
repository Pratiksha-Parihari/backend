const internModel= require("../Models/internModel")
const collegeModel=require("../Models/collegeModel")

const createintern= async (req,res)=>{
    try{
        data=req.body
         res.setHeader('Access-Control-Allow-Origin','*')
        //check college register or not
        let validCollage = await collegeModel.findOne({name:data.collegeName})
        if (!validCollage) return res.status(404).send({ status: false, msg: "college is not register " })
       
        // set the college id into the data object and delete key collegename
        //  let collageId=validCollage._id.toString()
        //        data.collegeId = collageId
        //  delete data.collegName
//modified
       data.collegeId= validCollage._id.toString()
      //create the intern
     let creatintern= await internModel.create(data);
       let newIntern = {
         name: creatintern.name,
         email:creatintern.email,
         mobile:creatintern.mobile,
         collegeId:creatintern.collegeId,
         isDeleted:creatintern.isDeleted


       }

    return res.status(201).send({status:true,data:newIntern});
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}

module.exports.createintern=createintern;

