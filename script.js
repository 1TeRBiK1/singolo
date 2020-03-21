const hovermenu = (event) => {
    document.querySelectorAll('a').forEach(a=>a.style.color="")
    event.target.style.color="#f06c64";
}
document.querySelector('ul').addEventListener("click",hovermenu)
const hovermenubar = (event) => {
    document.querySelectorAll('a').forEach(a=>a.style.color="")
    event.target.style.color="#c5c5c5";
    document.querySelectorAll('li').forEach(li=>li.style.borderColor="")
    event.target.parentElement.style.borderColor="#c5c5c5";
    let scrollpicture =document.querySelector("#imgs > img:nth-child(1)")
    let pictureclone = scrollpicture.cloneNode(true);
    document.querySelector("#imgs").appendChild(pictureclone);
    scrollpicture.remove();
}
document.getElementById('list').addEventListener("click",hovermenubar)

// const hoverimg = (event) => {
//     document.querySelectorAll('img').forEach(img=>img.style.border="")
//     event.target.style.border = "5px solid #F06C64";
// }
// document.getElementById('imgs').addEventListener("click",hoverimg)

// document.querySelector('button').addEventListener("click",()=>{
//     event.preventDefault();
//     let form = document.forms.form;
//     let elemName = form.elements.name; 
//     console.log(elemName.value);
//     let elemEmail = form.elements.email;
//     console.log(elemEmail.value)
//     let elemSubject = form.elements.subject;
//     console.log(elemSubject.value);
//     document.getElementById('block-form').style.display="block";
//     document.getElementById('block-content').style.display="block"; })

//  document.getElementById('button-Ok').addEventListener("click",() => {
//     event.preventDefault();
//     document.getElementById('block-form').style.display="none";
//     document.getElementById('block-content').style.display="none";
//  })
//  function clickOnIphone(){
//     let style_for_screen = 'background: #000';
//     let this_iphone = Array.from(this.getElementsByClassName('sleep'))[0];
//     if(this_iphone.style.length){
//         this_iphone.style = '';
//     }else{
//         this_iphone.style = style_for_screen;
//     }
// }
// let iphone = Array.from(document.getElementsByClassName('body'));
// iphone.forEach(elem => elem.onclick = clickOnIphone);
document.addEventListener('scroll',onScroll);
function onScroll(){
    let curPos= window.scrollY;
    let divs = document.querySelectorAll('body>div');
    let navigation = document.querySelectorAll('li>a');
    divs.forEach((el)=>{
        if(el.offsetTop <= curPos){
            navigation.forEach((a)=>{
                a.style.color="#ffffff";
                if(a.getAttribute('href').substring(1) === el.getAttribute('id')){
                    a.style.color="#f06c64";   
}
            })
        }
    });
}

