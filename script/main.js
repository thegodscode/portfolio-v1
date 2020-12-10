function $(elem) {
    document.querySelectorAll(elem)
    
}

let my_skills =["Java developer", "Html","Css","Js"];

let qualifications = document.getElementById("qualifications");
var num=0;
var myvar= setInterval(()=>{
    if (num<4) {
       qualifications.innerHTML = my_skills[this.num];
       qualifications.classList.add("slideshow");
      // console.log(  qualifications.innerHtml);
   } else {
   num =0;
   qualifications.innerHTML = my_skills[this.num]
   }
   num++;
 } , 3000);
console.log(document.body.clientHeight)
window.onscroll = ()=>{

    console.log(window.innerHeight);
    console.log(document.body.scroll);
}