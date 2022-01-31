const api = require('../config/woocommerce')

exports.getShippingClasses = async(req,res)=>{
    try{
        const value = await api.get('products/shipping_classes');
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


exports.createShippingClass = async(req,res)=>{
    try {
        const data = req.body   
        const value = await api.post("products/shipping_classes", data)
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

exports.updateShippingClass = async(req,res)=>{
  try {
    const data = req.body   
    const value = await api.post("products/shipping_classes/9", data)
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


exports.retriveShippingClass = async(req,res)=>{
    try {
      const data = req.body   
      const value = await api.get("products/shipping_classes/9", data)
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


  exports.removeShippingClass = async(req,res)=>{
    try {
      const data = req.body   
      const value = await api.delete("products/shipping_classes/9", data)
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
      const products = await api.post("products/shipping_classes/batch", data)
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