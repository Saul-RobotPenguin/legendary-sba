import foxCall from "./apiFunctionCalls/foxCall.js";
import ImageElement from "./imageFactory.js";

const resultContainerFox = document.querySelector(".resultFox")
const foxButton = document.querySelector(".foxBtn")









  foxButton.addEventListener("click", () =>{
    
    if (resultContainerFox.children.length) {
        resultContainerFox.removeChild(resultContainerFox.children[0]);
      }
    // console.log(image)
   foxCall().then((data) =>{
    let image = ImageElement(data.image)

    resultContainerFox.appendChild(image)

   })


  })


  
