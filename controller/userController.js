import User from '../models/userModel.js';

export const fetch = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}


export const create = async (req, res) => {
    try {
       const userData = new User(req.body);
       const {email} = userData;
       const userExist = await User.findOne({email}); 
       if(userExist){
          return res.status(400).json({message: 'user already exists!'})
       }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}