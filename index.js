const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const path=require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err )=>{
     console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
        updated_at:new date(),
    });
     newChat.save()
     .then((res)=>{
        console.log("chat saved successfully");
     })
     .catch((err)=>{
        console.log(err);
     });
     res.redirect("/chats");
});

// Edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let{id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

// update route

app.put("/chats/:id",async(req,res)=>{
    let{id}=req.params;
    let{msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    res.redirect("/chats");

});
// destroy route
app.delete("/chats/:id",async(req,res)=>{
    let{id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


app.get("/",(req,res)=>{
    res.send("working");
});

app.listen(8080,()=>{
    console.log("servern is running on port 8080");
});