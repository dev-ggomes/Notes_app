const firstheading=document.querySelector(".heading");
const secondheading=document.querySelector(".secondheading");
const newaddbutton=document.querySelector(".fa-plus-circle");
const backarrow=document.querySelector(".fa-arrow-left");
const notecontent=document.querySelector(".notescontent");
const bodycontent=document.querySelector(".body");
const bottomcontent=document.querySelector(".newnotes");
const sidebarbtn=document.querySelector(".fa-reorder");
const sidebarcontent=document.querySelector(".sidebar");
const sidenotepara=document.querySelector(".abovesidecontent");//Notes in SideBar
const deletebtn=document.querySelector(".fa-trash");
const noteboxcontent=document.querySelector(".notebox");
const savebtn=document.querySelector(".rightitem p");
const titlebox=document.querySelector("#inputcontent");
const paracontent=document.querySelector("#textcontent");
console.log(paracontent);//
newaddbutton.addEventListener("click",()=>
{
  firstheading.style.display="none";
  bodycontent.style.display="none";
  newaddbutton.style.display="none";
  bottomcontent.style.display="none";
  secondheading.style.display="flex";
  notecontent.style.display="flex";

})
backarrow.addEventListener('click',()=>
{
  firstheading.style.display="flex";
  secondheading.style.display="none";
  notecontent.style.display="none";
  bodycontent.style.display="flex";
  newaddbutton.style.display="flex";
  bottomcontent.style.display="flex";
})
sidebarbtn.addEventListener("click",()=>
{
  firstheading.style.display="none";
  secondheading.style.display="none"; 
  bodycontent.style.display="none";
  bottomcontent.style.display="none";
  sidebarcontent.style.display="flex";
})
sidenotepara.addEventListener("click",()=>
{
  firstheading.style.display="flex";
  // secondheading.style.display="flex"; 
  bodycontent.style.display="grid";
  bottomcontent.style.display="flex";
  sidebarcontent.style.display="none";
})
// deletebtn.addEventListener("click",()=>
// {
// noteboxcontent.style.display="none";
// // bodycontent.style.display="none";
// })//wait
savebtn.addEventListener("click",()=>
{
  notecontent.style.display="none";
  secondheading.style.display="none";
  firstheading.style.display="flex";
  bodycontent.style.display="flex";
  newaddbutton.style.display="flex";
  bottomcontent.style.display="flex";
   const notesbox=document.createElement("div");
   const insidenotesbox=`<h3>${titlebox.value}</h3>
   <p>
     ${paracontent.value}
   </p>`
   notesbox.innerHTML=insidenotesbox;
   console.log(insidenotesbox);
   console.log(notesbox);
   bodycontent.append(notesbox);
   titlebox.value="";
   paracontent.value="";
})

//initial initialisation problem occured