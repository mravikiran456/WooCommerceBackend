const api = require('../config/woocommerce')

exports.getCategories = async(req,res)=>{
    try{
        const attributes = await api.get('products/attributes');
        if(!attributes){
            return res.json({ response : "Error occured" })
        }
        return res.status(200).json({response : attributes})
    }
    catch (e) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
    }
}


exports.createCategory = async(req,res)=>{
    try {
        const data = req.body   
        const createdAttribute = await api.post("products/attributes", data)
        if(!createdAttribute){
          return res.json(
                  {
                      response : "Error occured"
                  })
        }
        return res.status(200).json({response : createdAttribute})  
      } catch (error) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
      }  
}

exports.updateCategory = async(req,res)=>{
  try {
    const data = req.body   
    const updatedAttribute = await api.post("products/attributes/9", data)
    if(!updatedAttribute){
      return res.json(
              {
                  response : "Error occured"
              })
    }
    return res.status(200).json({response : updatedAttribute})  
  } catch (error) {
    res.status(401).json({
        type: "error",
        message: "Something Went Wrong!"
    });  
  }  
}


exports.retriveCategory = async(req,res)=>{
    try {
      const data = req.body   
      const retriveAttribute = await api.get("products/attributes/9", data)
      if(!retriveAttribute){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : retriveAttribute})  
    } catch (error) {
      res.status(401).json({
          type: "error",
          message: "Something Went Wrong!"
      });  
    }  
  }


  exports.removeCategory = async(req,res)=>{
    try {
      const data = req.body   
      const removedAttribute = await api.delete("products/attributes/9", data)
      if(!removedAttribute){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : removedAttribute})  
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
      const products = await api.post("products/attributes/batch", data)
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