const api = require('../config/woocommerce')

exports.getTags = async(req,res)=>{
    try{
        const value = await api.get('products/tags');
        if(!value){
            return res.json({ response : "Error occured" })
        }
        return res.status(200).json({response : value})
    }
    catch (e) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
    }
}


exports.createTags = async(req,res)=>{
    try {
        const data = req.body   
        const value = await api.post("products/tags", data)
        if(!value){
          return res.json(
                  {
                      response : "Error occured"
                  })
        }
        return res.status(200).json({response : value})  
      } catch (error) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
      }  
}

exports.updateTags = async(req,res)=>{
  try {
    const data = req.body   
    const value = await api.post("products/tags/9", data)
    if(!value){
      return res.json(
              {
                  response : "Error occured"
              })
    }
    return res.status(200).json({response : value})  
  } catch (error) {
    res.status(401).json({
        type: "error",
        message: "Something Went Wrong!"
    });  
  }  
}


exports.retriveTags = async(req,res)=>{
    try {
      const data = req.body   
      const value = await api.get("products/tags/9", data)
      if(!value){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : value})  
    } catch (error) {
      res.status(401).json({
          type: "error",
          message: "Something Went Wrong!"
      });  
    }  
  }


  exports.removeTags = async(req,res)=>{
    try {
      const data = req.body   
      const value = await api.delete("products/tags/9", data)
      if(!value){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : value})  
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
      const products = await api.post("products/tags/batch", data)
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