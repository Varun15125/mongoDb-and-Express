const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
  .then(() =>{
     console.log("connected successfully");
   })
   .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from:"sara",
        to:"priya",
        msg:"what are you doing",
        created_at: new Date(),
    },
    {
        from:"menal",
        to:"shoba",
        msg:"send me the notes",
        created_at: new Date(),
    },  
    {
        from:"varun",
        to:"sakthak",
        msg:"lets meet at 5",
        created_at: new Date(),
    },
    {
        from:"tony",
        to:"priya",
        msg:"good morning",
        created_at: new Date(),
    },
    {
        from :"sunil",
        to:"ravi",
        msg:"how are you",
        created_at: new Date(),
    }
];

chat.insertMany(allChats);
