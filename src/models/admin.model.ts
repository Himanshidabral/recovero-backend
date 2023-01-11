import { model, Schema } from "mongoose";
import { AdminInterface } from "../interfaces/modalInterfaces/admin.interface";

const Admin= new Schema({
    email:{
        type: String,
        lowercase: true,
        trim: true,
        default: null

    },
    password:{
        type:String,
        default:null
    },
    name:{
        type:String,
        default:null
    },
    passwordChangedAt: {
        type: Date,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        default:null
    },
    role:{
        type:Number,
        enum:[1,2] // 1= admin , 2= user
    }
}
, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
  })

export default  model<AdminInterface>('Admin',Admin);
