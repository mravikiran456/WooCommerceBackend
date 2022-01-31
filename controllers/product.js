const productService=require('../repositories/product-db')
const api = require('../config/woocommerce')

exports.getProducts = async(req,res)=>{
    try{
        const products = await api.get('products');
        if(!products){
            return res.json({ response : "Error occured" })
        }         
        const dataKeys = Object.keys(products.data[products.data.length-1])
        let newLabels = []
        for (let i of dataKeys){    
        switch (i) {
        case 'name':
            newLabels.push({"dataType" : "string" ,"property":"name","label":"BrandName"})
            break
        case 'slug':
            newLabels.push({"dataType" : "string" ,"property":"slug","label":"Slug"})
            break
         case 'status':
            newLabels.push({"dataType" : "string" ,"property":"status","label":"Status"})
            break
          case 'description':
            newLabels.push({"dataType" : "string" ,"property":"description","label":"Description"})
            break
          case 'short_description':
            newLabels.push({"dataType" : "string" ,"property":"short_description","label":"Short-Info"})
            break
         case 'sku':
            newLabels.push({"dataType" : "string" ,"property":"sku","label":"SKU"})
            break
         case 'regular_price':
            newLabels.push({"dataType" : "string" ,"property":"regular_price","label":"Regular-Price"})
            break
         case 'sale_price':
            newLabels.push({"dataType" : "string" ,"property":"sale_price","label":"Sale-Price"})
            break
         case 'date_on_sale_from':
            newLabels.push({"dataType" : "string" ,"property":"date_on_sale_from","label":"DateOnSaleFrom"})
            break
         case 'date_on_sale_from_gmt':
            newLabels.push({"dataType" : "string" ,"property":"date_on_sale_from_gmt","label":"DateOnSaleFromGmt"})
            break
         case 'date_on_sale_to':
            newLabels.push({"dataType" : "string" ,"property":"date_on_sale_to","label":"DateOnSaleTo"})
            break
         case 'date_on_sale_to_gmt':
            newLabels.push({"dataType" : "string" ,"property":"date_on_sale_to_gmt","label":"DateOnSaleToGmt"})
            break
        //  case "virtual":
        //     newLabels.push({"dataType" : "string" ,"property":"virtual","label":"Virual"})
        //     break
        //   case "downloadable":
        //     newLabels.push({"dataType" : "string" ,"property":"downloadable","label":"Downloadble"})
        //     break
        //  case "downloads":
        //     newLabels.push({"dataType" : "string" ,"property":"downloads","label":"Downloads"})
        //     break
        //  case "download_limit":
        //     newLabels.push({"dataType" : "string" ,"property":"download_limit","label":"DownloadLimit"})
        //     break
        //  case "download_expiry":
        //     newLabels.push({"dataType" : "string" ,"property":"download_expiry","label":"DownloadExpiry"})
        //     break
        //  case "external_url":
        //     newLabels.push({"dataType" : "string" ,"property":"external_url","label":"ExternalUrl"})
        //     break
        //  case "button_text":
        //     newLabels.push({"dataType" : "string" ,"property":"button_text","label":"ButtonText"})
        //     break
        //  case "tax_status":
        //     newLabels.push({"dataType" : "string" ,"property":"tax_status","label":"TaxStatus"})
        //     break
        //  case "tax_class":
        //     newLabels.push({"dataType" : "string" ,"property":"tax_class","label":"TaxStatus"})
        //     break
         case "manage_stock":
            newLabels.push({"dataType" : "string" ,"property":"manage_stock","label":"ManageStock"})
            break
        case "stock_quantity":
            newLabels.push({"dataType" : "string" ,"property":"stock_quantity","label":"StockQuantity"})
            break
         case "stock_status":
               newLabels.push({"dataType" : "string" ,"property":"stock_status","label":"StockStatus"})
            break
         case "backorders":
            newLabels.push({"dataType" : "string" ,"property":"backorders","label":"BackOrders"})
            break
         case "sold_individually":
            newLabels.push({"dataType" : "string" ,"property":"sold_individually","label":"SoldIndividually"})
            break
         case "weight":
            newLabels.push({"dataType" : "string" ,"property":"weight","label":"Weight"})
            break
         case "dimensions":
            newLabels.push({"dataType" : "string" ,"property":"dimensions","label":"Dimensions"})
            break            
        //  case "upsell_ids":
        //     newLabels.push({"dataType" : "string" ,"property":"upsell_ids","label":"UpSellIds"})
        //     break
        //  case "cross_sell_ids":
        //     newLabels.push({"dataType" : "string" ,"property":"cross_sell_ids","label":"CrossSellIds"})
        //     break
         case "parent_id":
            newLabels.push({"dataType" : "string" ,"property":"parent_id","label":"ParentId"})
            break
         case "purchase_note":
            newLabels.push({"dataType" : "string" ,"property":"purchase_note","label":"PurchaseNote"})
            break
         case "categories":
            newLabels.push({"dataType" : "array" ,"property":"categories","label":"Categories"})
            break
         case "tags":
            newLabels.push({"dataType" : "array" ,"property":"tags","label":"Tags"})
            break
         case "images":
            newLabels.push({"dataType" : "array" ,"property":"images","label":"Images"})
            break
        //  case "attributes":
        //     newLabels.push({"dataType" : "array" ,"property":"attributes","label":"Attributes"})
        //     break
        //  case "default_attributes":
        //     newLabels.push({"dataType" : "array" ,"property":"default_attributes","label":"Default-Attributes"})
        //     break
        //  case "grouped_products":
        //     newLabels.push({"dataType" : "string" ,"property":"grouped_products","label":"Grouped-Products"})
        //     break
         case "price_html":
            newLabels.push({"dataType" : "string" ,"property":"price_html","label":"PriceHtml"})
            break
         case "menu_order":
            newLabels.push({"dataType" : "string" ,"property":"menu_order","label":"MenuOrder"})
            break
         case "meta_data'":
            newLabels.push({"dataType" : "string" ,"property":"meta_data","label":"MetaData"})
            break
        default:
            }
        }        
        return res.status(200).json(
          {
            response : newLabels,
          })
    }
    catch (e) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
    }
}


exports.createProduct = async(req,res)=>{
    try {
        const data = req.body   
        const createdProduct = await api.post("products", data)
        if(!createdProduct){
          return res.json({
                      response : "Error occured"
                  })
        }
        let response = productService.createProduct(createdProduct.data)
        return res.status(200).json({response : response})  
      } catch (error) {
        res.status(401).json({
            type: "error",
            message: "Something Went Wrong!"
        });  
      }  
}

exports.updateProduct = async(req,res)=>{
  try {
    const data = req.body   
    const updatedProduct = await api.post("products/id", data)
    if(!createdProduct){
      return res.json(
              {
                  response : "Error occured"
              })
    }
    return res.status(200).json({response : createdProduct.data})  
  } catch (error) {
    res.status(401).json({
        type: "error",
        message: "Something Went Wrong!"
    });  
  }  
}


exports.retriveProduct = async(req,res)=>{
    try {
      const data = req.body   
      const singleProduct = await api.get("products/id", data)
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


  exports.removeProduct = async(req,res)=>{
    try {
      const data = req.body   
      const singleProduct = await api.delete("products/id", data)
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


  exports.bulkUpload = async(req,res)=>{
    try {
      const data = req.body   
      const products = await api.post("products/batch", data)
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

