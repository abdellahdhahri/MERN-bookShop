const router = require("express").Router();
const { Router } = require("express");
const bookModel = require("../models/booksModel");
//POST Request
router.post("/add",async(req,res)=>
{
    try{
        const data = req.body;
        const newBook = new bookModel(data);
        await  newBook.save().then(()=>{
            res.status(200).json({message: "book added successfully"});
        });
    }catch(error){
        console.log("error");
    }
});
//GET REQUEST
router.get("/getBooks", async(req,res)=>{
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({books});

    } catch (error) {
        
    }
});
//GET REQUEST with ID
router.get("/getBooks/:id", async(req,res)=>{
    let book;
    const id =req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({book});

    } catch (error) {
        
    }
});
//UPDATE REQUEST with ID
router.put("/updateBook/:id", async(req,res)=>{
    const id =req.params.id;
    const  {name,description,author,bookname,image,price}=req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id,{
            name,
            description,
            author,
            bookname,
            image,
            price,
        });
        await book
                    .save()
                    .then(()=>res.send(200).json({message:"Data pdated Successfully"}));
    } catch (error) {
        
    }
});
//DELETE REQUEST with ID
router.delete("/deleteBook/:id", async(req,res)=>{
    const id =req.params.id;
   
    try {
         await bookModel
                    .findByIdAndDelete(id)
                    .then(()=>res.status(201).json({message:"Deleted Successfully"}));
    } catch (error) {
        
    }
});

module.exports = router;