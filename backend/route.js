const express =require( "express");

const app = express();
const port = 3000;

// app.use(express.json());

// let product = {
//     med: [
//       {
//         productN: "Magepan",
//         productId: 1,
//         company: "Alkem",
//         price: 50,
//         quantity: 1000,
        
//       },
//       {
//         productN: "Corex",
//         productId: 2,
//         company: "Phizer",
//         price: 132,
//         quantity: 500,
        
//       },
//       {
//         productN: "Althrocin",
//         productId: 3,
//         company: "Alkem",
//         price: 72,
//         quantity: 10000,
        
//       },
   
//     ],
//   };

//   app.get("/product",(req,res)=>{
//     console.log("123");
//     res.json(product.med);
    
//   });
  
//   app.delete("/product/del/:productName",(req,res) =>{
//     console.log(req.params)
//     const index = product.med.findIndex((c)=> c.productN === req.params.productName);
//     if(index == -1)
//     {
//       res.status(404).send("product not found");
//     }else{
//       product.med.splice(index, 1);
//       res.send("product removed");
//     }
  
//   });

//   app.post("/product/add/:productName", (req, res) => {
//     const pro = product.med.find((c) => c.productN === req.params.productName);
//     if (!pro) {
//         product.med.push(req.body);
//         res.send("Course added");
//       //res.status(404).send("product not found");
//     } else {
//     //   const newUser = req.body.newUser;
//     //     product.med.push(newUser);
//       res.send("product prrsent allready");
//     }
//   });



  app.put("/product/che/:productName", (req, res) => {
    const index = product.med.findIndex(
      (c) => c.quantity === req.params.productName
    );
    if (index === -1) {
      res.status(404).send("product not found");
    } else {
      product.med[index] = { ...product.med[index], ...req.body };
      res.send("product updated");
    }
  });
app.get("/", (req,res)=>{
    res.send("Medisell ");
    console.log(res);
});
app.get("/video_conference", (res,req)=>{
    res.send("Requesting for video call");
    console.log(res);
});
app.get("/product/:id", (req,res)=>{
    const id = req.params.id;
    res.send(`Product id is ${id}`);
    //console.log(req);
});
app.get("/user_login/:username",(req,res)=>{
    const username = req.params.username;
    res.send(`your user id is ${username}`);
    //console.log(req);
});
app.listen(port,()=>{
    console.log(`Sending mty first get request on port ${port}`);
});
app.use(express.static('asset'));
app.use(express.static('src'));
