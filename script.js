const portfolioImgButtons = document.querySelectorAll("#listButton > li");

const onClickToPortfolioImgButton = (event) => {
  portfolioImgButtons.forEach((buttons) => {
    buttons.style.color = "";
  });

  event.target.style.color = "#ffffff";

  const scrollpicture = document.querySelector("#imgs > img:nth-child(1)");
  const pictureclone = scrollpicture.cloneNode(true);

  scrollpicture.remove();
  document.querySelector("#imgs").appendChild(pictureclone);
};

portfolioImgButtons.forEach((button) =>
  button.addEventListener("click", onClickToPortfolioImgButton)
);

const onClickToPortfolioImg = (event) => {
  const newBorderImg = "5px solid rgb(240, 108, 100)";
  console.log(event.target, event.target.style.border === newBorderImg);
  event.target.style.border === newBorderImg
    ? (event.target.style.border = "")
    : (event.target.style.border = newBorderImg);
  document
    .querySelectorAll(".img-hide13")
    .forEach((img) => (img === event.target ? null : (img.style.border = "")));
};

const portfolioImgs = document.getElementById("imgs");
portfolioImgs.addEventListener("click", onClickToPortfolioImg);

const enableModal = (event) => {
  event.preventDefault();
  document.getElementById("block-form").style.display = "block";
  document.getElementById("block-content").style.display = "block";
};

const onClickToSubmitButton = (event) => {
  event.preventDefault();
  const form = document.forms.form;

  const elemdescribtion = form.elements.describtion;
  const elemSubject = form.elements.subject;

  const subject_message =
    elemSubject.value == "" ? "Без темы" : "Тема: " + elemSubject.value;

  const describtion_message =
    elemdescribtion.value == ""
      ? "Без описания"
      : "Описание: " + elemdescribtion.value;

  document.querySelector(".subject-mes").innerText = `${subject_message}`;
  document.querySelector(".describe-mes").innerText = `${describtion_message}`;

  enableModal(event);
};

const submitButtton = document.getElementById("#submit");
submitButtton.addEventListener("click", onClickToSubmitButton);

const disableModal = (event) => {
  event.preventDefault();
  document.getElementById("block-form").style.display = "none";
  document.getElementById("block-content").style.display = "none";
};

const modalButton = document.getElementById("modalButton");
modalButton.addEventListener("click", disableModal);

function clickOnIphone() {
  const style_for_screen = "background: #000";
  const this_iphone = this.getElementsByClassName("sleep")[0];
  this_iphone.style.background
    ? (this_iphone.style = "")
    : (this_iphone.style = style_for_screen);
}

const iphones = document.querySelectorAll(".iphone");
iphones.forEach((iphone) => iphone.addEventListener("click", clickOnIphone));

const onScroll = (event) => {
  const sectionDivs = document.querySelectorAll("body > div[id]");
  const navigationLink = document.querySelectorAll(".hatlist > li > a");
  const height = event.pageY;
  sectionDivs.forEach((section, index) => {
    if (section.offsetTop <= height) {
      navigationLink.forEach((link) => (link.style.color = "#ffffff"));
      navigationLink[index].style.color = "#f06c64";
    }
  });
};

document.addEventListener("mousemove", onScroll);

function clickOnChev() {
  if (slider_1) {
    center.forEach((elem) => (elem.style = "display: none"));
    //   center.style = 'background: url(assets/slider-2.png);height: 513px; ';
    slider.style =
      "background-color: #648bf0;background: url(assets/slider-2.png);background-repeat: no-repeat;";
    left_button.style = "right: 416px; top: -2px;";
    slider_1 = false;
  } else {
    center.style = "";
    center.forEach((elem) => (elem.style = ""));
    slider.style = "background-color: #f06c64";
    slider_1 = true;
    left_button.style = "";
  }
}
const chevButtons = document.querySelectorAll(".chevButton");
chevButtons.forEach((button) => button.addEventListener("click", clickOnChev));
const left_button = [...document.getElementsByClassName("left-button")][0];

const center = [...document.getElementsByClassName("center")];
const slider = [...document.getElementsByClassName("slider")][0];
let slider_1 = true;
const subject = document.querySelector("#f-subject");
const discribe = document.querySelector("#textarea");
