const api = require('../config/woocommerce')

exports.getAttributeTerms = async(req,res)=>{
    try{
        const terms = await api.get('products/attributes/2/terms');
        if(!terms){
            return res.json({ response : "Error occured" })
        }
        return res.status(200).json({response : terms})
    }
    catch (e) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
    }
}


exports.createAttributeTerms = async(req,res)=>{
    try {
        const data = req.body   
        const terms = await api.post("products/attributes/2/terms", data)
        if(!terms){
          return res.json(
                  {
                      response : "Error occured"
                  })
        }
        return res.status(200).json({response : terms})  
      } catch (error) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
      }  
}

exports.updateAttributeTerms = async(req,res)=>{
  try {
    const data = req.body   
    const terms = await api.post("products/attributes/2/terms/23", data)
    if(!terms){
      return res.json(
              {
                  response : "Error occured"
              })
    }
    return res.status(200).json({response : terms})  
  } catch (error) {
    res.status(401).json({
        type: "error",
        message: "Something Went Wrong!"
    });  
  }  
}


exports.retriveAttributeTerms = async(req,res)=>{
    try {
      const data = req.body   
      const terms = await api.get("products/attributes/2/terms/23", data)
      if(!terms){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : terms})  
    } catch (error) {
      res.status(401).json({
          type: "error",
          message: "Something Went Wrong!"
      });  
    }  
  }


  exports.removeAttributeTerms = async(req,res)=>{
    try {
      const data = req.body   
      const terms = await api.delete("products/attributes/2/terms/23", data)
      if(!terms){
        return res.json(
                {
                    response : "Error occured"
                })
      }
      return res.status(200).json({response : terms})  
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
      const products = await api.post("products/attributes/2/terms/batch", data)
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