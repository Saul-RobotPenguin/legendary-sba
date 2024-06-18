import dogCall from "./apiFunctionCalls/dogCall..js"
import ImageElement from "./imageFactory.js";

const resultContainerDog = document.querySelector(".resultDog")
const dogButton = document.querySelector(".dogBtn")

dogButton.addEventListener("click", () =>{
    
    if (resultContainerDog.children.length) {
        resultContainerDog.removeChild(resultContainerDog.children[0]);
      }
    // console.log(image)
   dogCall().then((data) =>{
    console.log(data)
    let image = ImageElement(data.message)

    resultContainerDog.appendChild(image)

   })


  })