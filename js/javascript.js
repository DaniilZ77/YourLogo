let search=document.querySelector(".item-search");
let form=document.querySelector(".modal-window");
let body=document.querySelector("body");
let close=document.querySelector(".close-modal");
let burger=document.querySelector(".burger");
let nav=document.querySelector(".header-nav");
search.onclick=function() {
	form.classList.toggle("active");
	body.classList.toggle("modal");
}
close.onclick=function() {
	form.classList.remove("active");
	body.classList.toggle("modal");
}
burger.onclick=function() {
	burger.classList.toggle("active");
	nav.classList.toggle("active");
	body.classList.toggle("lock");
}
let tabs=document.getElementsByClassName("tabs-body");
let tabs_head=document.getElementsByClassName("tabs-head-item");
function Tab(x) {
	for (let tab of tabs) tab.classList.add("none");
	tabs[x].classList.remove("none");
	for (let head of tabs_head) head.classList.remove("checked");
	tabs_head[x].classList.add("checked");
}
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop-navigation.clientHeight,
		behavior: "smooth",
	});
}
let anchor=document.querySelector("#anchor");
let about=document.querySelector("#about");
let navigation=document.querySelector(".navigation");
anchor.addEventListener("click", ()=>{
	scrollTo(about);
});
let home1=document.querySelector("#home1");
let about1=document.querySelector("#about1");
let servicing1=document.querySelector("#servicing1");
let portfolio1=document.querySelector("#portfolio1");
let blog1=document.querySelector("#blog1");
let contact1=document.querySelector("#contact1");
let about_=document.querySelector("#about-scroll");
let servicing_=document.querySelector("#servicing-scroll");
let portfolio_=document.querySelector("#portfolio-scroll");
let blog_=document.querySelector("#blog-scroll");
let contact_=document.querySelector("#contact-scroll");
function scrollToHome() {
	window.scroll({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
}
home1.addEventListener("click", ()=>{
	scrollToHome();
});
servicing1.addEventListener("click", ()=>{
	scrollTo(servicing_);
});
about1.addEventListener("click", ()=>{
	scrollTo(about);
});
portfolio1.addEventListener("click", ()=>{
	scrollTo(portfolio_);
});
blog1.addEventListener("click", ()=>{
	scrollTo(blog_);
});
contact1.addEventListener("click", ()=>{
	scrollTo(contact_);
});
window.onresize=function() {
	if (body.clientWidth>768) {
		form.classList.remove("active");
		body.classList.remove("lock");
		body.classList.remove("modal");
		nav.classList.remove("active");
		burger.classList.remove("active");
	}
}