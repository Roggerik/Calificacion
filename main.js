const activado = document.querySelectorAll('.number');
const button = document.querySelector('button');
const card = document.querySelector('.card_thank');
const numSelection = document.querySelector('.selection');
const error = document.querySelector('.error');

activado.forEach(element => {  
  element.addEventListener('click',()=>{
    console.log(element)
    console.log(activado)
    for(i= 0; i<5; i++){
      activado[i].classList.remove('active')
    }
    element.classList.toggle('active');
    error.style.display = "none"
    console.log(element.outerText)
  })

});


button.addEventListener('click',validar);

function validar(){
  
  for(i=0; i< activado.length;i++){
    if(activado[i].className == "number active"){
      card.classList.add("cardActive")
      numSelection.innerHTML = activado[i].outerText
    }else{
      error.style.display = "block"
    }
  };

}
