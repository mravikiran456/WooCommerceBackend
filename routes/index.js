const express = require('express');
const router  = express.Router();
const { 
    Products, 
    Variants,
    Categories,
    ShippingClass,
    Attribute,
    Terms,
    Tags,
    Reviews
 } = require('../controllers')


//Product

//getting the product
router.get('/getProducts', Products.getProducts)
 //Creating the product
router.post('/createProduct', Products.createProduct)
//updating the product
router.post('/updateProduct', Products.updateProduct)
//Retrive the product
router.post('/retriveProduct', Products.updateProduct)
//Remove the product
router.post('/removeProduct', Products.removeProduct)
//Bulk upload
router.post('/bulkUpload', Products.bulkUpload)

// router.post('/upload', Products.upload)


//Product Variants

//getting the Variants
router.get('/getVariants', Variants.getVariants)
 //Creating the Variants
 router.post('/createVariants', Variants.createVariants)
 //updating the Variants
 router.post('/updateVariants', Variants.updateVariants)
 //Retrive the Variants
 router.post('/retriveVariants', Variants.retriveVariation)
 //Remove the Variants
 router.post('/removeVariants', Variants.removeVariants)
 //Bulk upload Variants
 router.post('/bulkUpload', Variants.bulkUpload)


 //Product Categories

//getting the Categories
router.get('/getCategories', Categories.getCategories)
//Creating the Variants
router.post('/createCategory', Categories.createCategory)
//updating the Variants
router.post('/updateCategory', Categories.updateCategory)
//Retrive the Variants
router.post('/retriveCategory', Categories.retriveCategory)
//Remove the Variants
router.post('/removeCategory', Categories.removeCategory)
//Bulk upload Variants
router.post('/bulkUpload', Categories.bulkUpload)

 //Product Attributes

//getting the Attributes
router.get('/getAttributes', Attribute.getAttributes)
//Creating the Variants
router.post('/createAttribute', Attribute.createAttribute)
//updating the Variants
router.post('/updateAttribute', Attribute.updateAttribute)
//Retrive the Variants
router.post('/retriveAttribute', Attribute.retriveAttribute)
//Remove the Variants
router.post('/removeAttribute', Attribute.removeAttribute)
//Bulk upload Variants
router.post('/bulkUpload', Attribute.bulkUpload)

//Product Attribute Terms

//getting the Attribute Terms
router.get('/getAttributesTerms', Terms.getAttributeTerms)
//Creating the Attribute Terms
router.post('/createAttributeTerms', Terms.createAttributeTerms)
//updating the Attribute Terms
router.post('/updateAttributeTerms', Terms.updateAttributeTerms)
//Retrive the Attribute Terms
router.post('/retriveAttributeTerms', Terms.retriveAttributeTerms)
//Remove the Attribute Terms
router.post('/removeAttributeTerms', Terms.removeAttributeTerms)
//Bulk upload Attribute Terms
router.post('/bulkUpload', Terms.bulkUpload)

//Product Shipping Class

//getting the Shipping Class
router.get('/getShippingClasses', ShippingClass.getShippingClasses)
//Creating the Shipping Class
router.post('/createShippingClass', ShippingClass.createShippingClass)
//updating the Shipping Class
router.post('/updateShippingClass', ShippingClass.updateShippingClass)
//Retrive the Shipping Class
router.post('/retriveShippingClass', ShippingClass.retriveShippingClass)
//Remove the Shipping Class
router.post('/removeShippingClass', ShippingClass.removeShippingClass)
//Bulk upload Shipping Class
router.post('/bulkUpload', ShippingClass.bulkUpload)

//Product Tags

//getting the Tags
router.get('/getTags', Tags.getTags)
//Creating the Tags 
router.post('/createTags', Tags.createTags)
//updating the Tags
router.post('/updateTags', Tags.updateTags)
//Retrive the Tags
router.post('/retriveTags', Tags.retriveTags)
//Remove the Tags
router.post('/removeTags', Tags.removeTags)
//Bulk upload Tags
router.post('/bulkUpload', Tags.bulkUpload)

//Product Reviews

//getting the Reviews
router.get('/getReviews', Reviews.getReviews)
//Creating the Reviews 
router.post('/createReview', Reviews.createReview)
//updating the Reviews
router.post('/updateReview', Reviews.updateReview)
//Retrive the Reviews
router.post('/retriveReview', Reviews.retriveReview)
//Remove the Reviews
router.post('/removeReview', Reviews.removeReview)
//Bulk upload Reviews
router.post('/bulkUpload', Reviews.bulkUpload)

module.exports = router