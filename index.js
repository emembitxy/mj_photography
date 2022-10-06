alert("welcome")


const backgrounds=["url('./images/MJ_27.jpg')","url('./images/MJ_19.jpg')","url('./images/MJ_28.jpg')"]

let count=1
setInterval(function() {
    
const image = document.querySelector(".indexmain")

    image.style.backgroundImage=backgrounds[count % 3]
    count++
    

}, 2000);
 





  
  
  