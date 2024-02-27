if (typeof document !== 'undefined') { 
  document.getElementById('btn1').addEventListener('click', function() {
  setTimeout(function() {
      document.getElementById('page4').scrollIntoView({ 
        behavior: 'smooth'
      });
  }, 100);
});


  document.getElementById('A').addEventListener('click', function() {
   
    setTimeout(function() {
        document.getElementById('page2').scrollIntoView({ 
          
          behavior: 'smooth' 
        });
    }, 100);
});
document.getElementById('page2-btn').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('page4').scrollIntoView({ 
          behavior: 'smooth'
        });
    }, 100);
});
document.getElementById('S').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('page3').scrollIntoView({ 
          behavior: 'smooth'
        });
    }, 100);
});
document.getElementById('H').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('page1').scrollIntoView({ 
          behavior: 'smooth'
        });
    }, 100);
});




//const clock=document.getElementById('clock');


/*setInterval(function(){
 let date=new Date();
 clock.innerHTML=date.toLocaleTimeString();
},1000)*/
 document.addEventListener('DOMContentLoaded', function() {
    // Add 'loaded' class to the body once the content has loaded
    document.body.classList.add('loaded');
  });
  
  const container = document.getElementById('reviews-container');

  container.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
      }
  });

 
}

 
const fs = require("node:fs")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express()
const port = 3000

const User = require("./model/user")
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))


mongoose.connect("mongodb://127.0.0.1:27017/UserdataDb").then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database Can't Be Connected")
})

app.get("/", (req, res)=>{
    let a = fs.readFileSync("Home Project/index.html")
    res.send(a.toString())
})

app.post("/", async(req, res)=>{
    
    const userData = new User(req.body)
    await userData.save()
    let a = fs.readFileSync("submit.html")
    res.send(a.toString())
    
})

app.listen(port, ()=>{

    console.log("App Running on port: ", port)
})
