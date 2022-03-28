let time = 4000
 corruentImageIndex = 0
  images = document.querySelectorAll('#slider img')
  max = images.length; 

  function nextImage() {

    images[corruentImageIndex].classList.remove("selected")

      
    corruentImageIndex ++

    if (corruentImageIndex >= max ) {
      corruentImageIndex = 0
    }

    images[corruentImageIndex].classList.add("selected")

      
  }
  
function start(){
  //console.log('window carregado') OK
  setInterval(() => {
    //console.log('função executada') 
    //TROCA DE IMAGENS
   nextImage()
  }, time)
}
window.addEventListener("load", start)