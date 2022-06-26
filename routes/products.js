const Product = require("../modals/Product");

const router = require("express").Router();

// Get Product
router.get("/", async (req, res) => {

     const qNew = req.query.new;
     const qCategory = req.query.categories;
     console.log(qCategory);
   try {
     if (qCategory) {
       product = await Product.find({
         categories: {
           $in: [qCategory],
         },
  
       });
       console.log(product)
            
     } else {
       product = await Product.find();
     }
     res.send(product);
   } catch (err) {
     res.status(500).json(err);
   }
});





module.exports = router;



