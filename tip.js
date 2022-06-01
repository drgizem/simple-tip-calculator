const h1=document.body.getElementsByClassName('title')
h1[0].style.color='blue'
const minidiv=document.querySelector('.minidiv')
minidiv.style.color='red'
const div=document.querySelector('.maindiv')
const firstp=document.querySelector(".first")
firstp.innerHTML='Bill Amount:'
const secondp=document.querySelector(".second")
secondp.innerHTML='How was the service?'
const thirdp=document.querySelector(".third")
thirdp.innerHTML='Tip Amount:'
const forthp=document.querySelector(".forth")
forthp.innerHTML='Total:'
const button=document.querySelector(".calcu")
button.innerHTML='Calculate'
button.style.backgroundColor='red'
button.style.color='white'


button.addEventListener('click',() => {
    let bill=Number(document.querySelector(".first-input").value)
    let percent=document.querySelector(".services").value
    let tip=bill*percent;
    let total=bill+tip;
    document.getElementById("third-input").innerHTML="$"+tip.toFixed(2)
    document.getElementById("forth-input").innerHTML="$"+total.toFixed(2)
    
})




