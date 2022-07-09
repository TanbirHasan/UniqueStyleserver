const Order = require("../modals/Orders");






const router = require("express").Router();

      router.post("/", async (req, res) => {
       const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
      res.send(savedOrder);
      

      
      });

   router.get("/", async (req, res) => {
     try {
       const orders = await Order.find();
       res.status(200).json(orders);
     } catch (err) {
       res.status(500).json(err);
     }
   });


    router.get("/myorder", async (req, res) => {
      const email = req.query.email;
     
      try {
        const orders = await Order.find({ email: email });
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
    });



module.exports = router;