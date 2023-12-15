function circle(){
    let circleCreate = document.createElement("span");
    let size = Math.floor(Math.random() * 40);
    circleCreate.classList.add("circle");
    circleCreate.style.width = `${size}px`; circleCreate.style.height = `${size}px`;
    circleCreate.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    document.body.appendChild(circleCreate);
    setInterval(() => circleCreate.remove(), 4500);
}

window.innerWidth < 760 ? null : setInterval(circle, 100);
let minMax = document.querySelectorAll("[data-max]");

function radiusBorder(){
    let valueBox = document.querySelector(".box");
    let top = document.querySelector(".top");
    let rigth = document.querySelector(".rigth");
    let left = document.querySelector(".left");
    let bottom = document.querySelector(".bottom");
    let radius = document.querySelector(".radius");
    let info = document.querySelector(".info");

    if(valueBox.value == "px"){
        minMax.forEach(maxOne => maxOne.setAttribute("max", "200"));
        radius.style.borderRadius = `${top.value}px ${left.value}px ${rigth.value}px ${bottom.value}px`;
        info.value = `border-radius: ${top.value}px ${left.value}px ${rigth.value}px ${bottom.value}px`;
    } else if(valueBox.value == "%"){
        minMax.forEach(maxTwo => maxTwo.setAttribute("max", "100"));
        radius.style.borderRadius = `${top.value}% ${left.value}% ${rigth.value}% ${bottom.value}%`;
        info.value = `border-radius: ${top.value}% ${left.value}% ${rigth.value}% ${bottom.value}%`;
    }
}

function widthHeight(){
    let width = document.querySelector(".width");
    let height = document.querySelector(".height");
    let box = document.querySelector(".radius");
    !width.value.length ? box.style.width = width.dataset.valor + "px" : null;
    !height.value.length ? box.style.height = height.dataset.valor + "px" : null;
    width.length > 3 ? null : box.style.width = `${width.value}px`;
    height.length > 3 ? null : box.style.height = `${height.value}px`;
}

document.querySelector(".box").onchange = (radiusBorder);
document.querySelectorAll('input[type="range"]').forEach((rangeInput) =>{
    rangeInput.oninput = (radiusBorder);
})
document.querySelectorAll('input[type="number"]').forEach((input) =>{
    input.oninput = () =>{
        input.value.length > input.maxLength ? input.value = input.value.slice(0, input.maxLength) : null;
        widthHeight();
    }; 
})

let btnColor = document.querySelector(".btn");

function copy(event){
    event.preventDefault();
    let text = document.querySelector(".info");
    navigator.clipboard.writeText(text.value);
    btnColor.innerText = "Copied!";
    btnColor.setAttribute("disabled", "");
    setTimeout(() =>{
        btnColor.innerText = "Copy";
        btnColor.removeAttribute("disabled");
    }, 3000)
}

btnColor.onclick = (copy);