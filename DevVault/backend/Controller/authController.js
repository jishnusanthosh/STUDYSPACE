import User from "../Model/User.js";


// Register 


export const register=async (req,res)=>{

    try {

        const {name,email,password}=req.body
        
        
        console.log(req.body);
        ;

        if (!name||!email||!password) {
            return res.status(400).json({
                sucess:false,
                message:"all fields are rquired"
            })
        }


        const existingUser=await User.findONe({email})

        if (existingUser) {
            return res.status(400).json({
                success:false,
                message:"user already exists"
            })
            
        }


        const user=await User.create({
            name,email,password
        })


        res.status(201).json({
            success:true,
            message:"registrarion successfull",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })

    } catch (error) {
        console.error(" Registraion error" ,error);
         res.status(500).json({
            success: false,
            message: "Internal server error"
        });
        
    }
}