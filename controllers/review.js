const api = require('../config/woocommerce')

exports.getReviews = async(req,res)=>{
    try{
        const value = await api.get('products/reviews');
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


exports.createReview = async(req,res)=>{
    try {
        const data = req.body   
        const value = await api.post("products/reviews", data)
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

exports.updateReview = async(req,res)=>{
  try {
    const data = req.body   
    const value = await api.post("products/reviews/9", data)
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


exports.retriveReview = async(req,res)=>{
    try {
      const data = req.body   
      const value = await api.get("products/reviews/9", data)
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


  exports.removeReview = async(req,res)=>{
    try {
      const data = req.body   
      const value = await api.delete("products/reviews/9", data)
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
      const products = await api.post("products/reviews/batch", data)
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