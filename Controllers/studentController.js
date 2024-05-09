const students = require('../Models/studentModels')
const details = require('../Models/studentDetailsModels')

//register
exports.register =async (req,res)=>{
    console.log("Inside register request!!!");
    const {firstname,lastname,address,email,gender,mobile,password,dateofbirth,course} = req.body
    console.log(firstname,lastname,address,email,gender,mobile,password,dateofbirth,course);

    try{
        //check student email is present in DB or not
        const existingStudent = await students.findOne({email})
        //if email is present then exisiting student
        if(existingStudent){
            res.status(406).json("Student Already exists!!!")
        }else{
            //else store / insert data to db
            const newStudent = new students({
                firstname,lastname,address,email,gender,mobile,password,dateofbirth,course

            })
             //to store data to mongodb from mongoose model
             await newStudent.save()
             res.status(200).json(newStudent)


        }

    }catch(err){
        res.status(401).json(err)
    }
}

//get details

exports.getStudentDetails =async (req,res)=>{
    try{
        const studentDetails = await students.find()
        res.status(200).json(studentDetails)
    }catch(err){
        res.status(401).json(err)
    }
}
