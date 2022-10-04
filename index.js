alert("welcome")

const image = document.getElementById("image1")

const popup =document.getElementById("wedding_PopUp")

// image.addEventListener("mouseleave",updateImage =>(){

// })

function updateImage(){
    
popup.append(image)


image.style.width ="100%";
image.style.height = "100%";


console.log("clicked")
}

image.addEventListener("click",updateImage)





  
  
  