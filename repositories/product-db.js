const fs = require('fs')
const { writeFile } = require('fs')

exports.getProducts=async()=>{  
    
}

exports.createProduct=async(data)=>{  
  let path = './collections/101/woocommerce/product.json'  
  fs.writeFile(path, JSON.stringify(data) , 'utf-8', (res)=>{
    console.log('Success')
  });
  return "success"
}


