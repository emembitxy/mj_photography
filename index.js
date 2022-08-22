const figureimage =document.querySelector(".aboutusfigure1")
const background=["images/mj_1.jpg"]
function updateimage(){
    fetch(background)
    .then((Response)=>Response.json())
    .then((data)=>{
        const figureimage=data.value
    })
    console.log(updateimage)
}

