import vendorModel from '../../../models/vendor'
import categoryModel from '../../../models/category'
import productModel from '../../../models/product'
import userModel from '../../../models/user'
import slotModel from '../../../models/slotBooking'


const slots={
    findID:async(query)=>{
        return await vendorModel.findById(query);
    },

    create:async(query)=>{
        return await slotModel.create(query);
    },

    findID2:async(query)=>{
        return await userModel.findById(query);
    },

    operation: async(query,obj)=>{
        return await  slotModel.updateOne(query,obj,{new:false});
    },

    findID3:async(query)=>{
        return await slotModel.findById(query);
    },


}


module.exports={slots}