const api = require('../config/woocommerce')

exports.getVariants = async(req,res)=>{
    try{
        const variations = await api.get('products/22/variations');
        if(!variations){
            return res.json({ response : "Error occured" })
        }
        return res.status(200).json({response : variations})
    }
    catch (e) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
    }
}


exports.createVariants = async(req,res)=>{
    try {
        const data = req.body   
        const createdVariant = await api.post("products/22/variations", data)
        if(!createdVariant){
          return res.json(
                  {
                      response : "Error occured"
                  })
        }
        return res.status(200).json({response : createdVariant})  
      } catch (error) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
      }  
}

exports.updateVariants = async(req,res)=>{
  try {
    const data = req.body   
    const updatedVariant = await api.post("products/22/variations/id", data)
    if(!updatedVariant){
      return res.json(
              {
                  response : "Error occured"
              })
    }
    return res.status(200).json({response : updatedVariant})  
  } catch (error) {
    res.status(401).json({
        type: "error",
        message: "Something Went Wrong!"
    });  
  }  
}


exports.retriveVariation = async(req,res)=>{
    try {
      const data = req.body   
      const singleProduct = await api.get("products/22/variations/id", data)
      if(!singleProduct){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : singleProduct.data})  
    } catch (error) {
      res.status(401).json({
          type: "error",
          message: "Something Went Wrong!"
      });  
    }  
  }


  exports.removeVariants = async(req,res)=>{
    try {
      const data = req.body   
      const removedVariant = await api.delete("products/22/variations/id", data)
      if(!removedVariant){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : removedVariant})  
    } catch (error) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
    }  
  }


  exports.bulkUpload = async(req,res)=>{
    try {
      const data = req.body   
      const products = await api.post("products/22/variations/batch", data)
      if(!products){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : products.data})  
    } catch (error) {
      res.status(401).json({
          type: "error",
          message: "Something Went Wrong!"
      });  
    }  
  }
