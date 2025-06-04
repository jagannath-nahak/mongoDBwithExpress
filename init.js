const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

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

let allchats=[
    {
        from:"abhas",
        to:"sphan",
        msg:"please snd my pictures",
        created_at:new Date(),
    },
     {
        from:"rhit",
        to:"mohit",
        msg:"please",
        created_at:new Date(),
    },
     {
        from:"amit",
        to:"sumit",
        msg:"please provide me the details",
        created_at:new Date(),
    },
];

Chat.insertMany(allchats);
console.log("all chats inserted successfully");