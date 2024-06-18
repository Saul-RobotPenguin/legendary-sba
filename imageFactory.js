export default function ImageElement (data){
    let image = document.createElement("img")
    console.log(image)
    image.src = data
    return image
}