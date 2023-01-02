function changeTitle(newTitle){
    let titleNode=document.getElementsByTagName('h1')[0];
    titleNode.innerText=newTitle
}

function changebg(){
    let bodynode=document.getElementsByTagName('body')[0]
    bodynode.style.backgroundColor="red"
}
function changeFooterAddress(){
    let footerAddress=document.querySelector('footer p span')
    footerAddress.innerText="xyz street,Germany"
}
function linkClass(){
    let linkNodes=document.getElementsByTagName('a')
    for(i=0;i<linkNodes.length;i++){
        linkNodes[i].classList.add('linkcss')
    }
}
function hideImage(){
    let imgnodes=document.getElementsByTagName('img')
    for(i=0;i<imgnodes.length;i++){
        imgnodes[i].classList.toggle('hidden')
    }
}



const getRandomColor = function () {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
  };
function colorPrice(){
   // let colors=["red","green","yellow","blue"]
   // let selectedColor=colors[Math.floor(Math.random()*5)]
    let priceNodes=document.getElementsByClassName('colorChange')
    for(i=0;i<priceNodes.length;i++){
        let priceNode=priceNodes[i];
        priceNode.style.color=getRandomColor();
    }
}

