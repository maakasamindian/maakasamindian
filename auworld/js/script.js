const header = document.querySelectorAll('.card-header img'),
 title = document.querySelectorAll('.card-title'),
 excerpt = document.querySelectorAll('.card-excerpt span'),
 profile_img = document.querySelectorAll('.profile-img'),
 name = document.querySelectorAll('.name'),
 date = document.querySelectorAll('.date'),
 card = document.querySelectorAll('.card-content'),
 postl = document.querySelectorAll('.postl'),
 nav2 = document.getElementById('ua-2'),
 inpu = document.querySelectorAll('.in-pu'),
 nav1 = document.getElementById('ua-3'),
 nav4 = document.getElementById('ua-1'),
 setting = document.querySelector('.setting'),
 seton = document.querySelector('.seton'),
 setoff = document.querySelector('.setoff'),
 loader = document.querySelector('.loader'),
 topost = document.querySelector('.f1_ab'),
 toabout = document.querySelector('.f2_ab')
 r1 = document.querySelector('#nav-1'),
 r2 = document.querySelector('#nav-2'),
 r3 = document.querySelector('#nav-3'),
 r4 = document.querySelector('#nav-4');
      

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg');

function getData() {
	header.forEach(bgs => { bgs.style.opacity='1',bgs.style.animation= 'show 0.4s ease' });
	title.forEach(bgs => { bgs.classList.add('visi')});
	excerpt.forEach(bgs => { bgs.classList.add('visi')});
	profile_img.forEach(bgs => { bgs.innerHTML = `<img src="auworld/img/post-dp.png" alt="ua" />`});
	name.forEach(bgs => { bgs.innerHTML = 'UAWORLD';});
	date.forEach(bgs => { bgs.classList.add('visi') });
	postl.forEach(bgs => { bgs.classList.add('visi') });
	animated_bgs.forEach(bgs => { bgs.classList.remove('animated-bg') });
	animated_bg_texts.forEach(bgs => { bgs.classList.remove('animated-bg-text') });
}
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".post .card");

anim.onclick = ()=>{
   inpu.forEach(bgs => { bgs.classList.add('in-pua') });
   setting.classList.add('hide');
  setting.classList.remove('display');
}
nav2.onclick = ()=>{
  inpu.forEach(bgs => { bgs.classList.remove('in-pua') });
  setTimeout(getData, 2500);
  setting.classList.add('hide');
  setting.classList.remove('display');
}
nav1.onclick = ()=>{
  inpu.forEach(bgs => { bgs.classList.remove('in-pua') });
  setting.classList.add('hide');
  setting.classList.remove('display');
}
function alertrc() {
  alert('right click is disable!!');
}
function hide() {
  loader.classList.add('hide');
}

topost.onclick = ()=> {
  setTimeout(getData, 2500);
}
toabout.onclick = ()=>{
  inpu.forEach(bgs => { bgs.classList.add('in-pua') });
}
nav4.onclick = ()=>{
inpu.forEach(bgs => { bgs.classList.remove('in-pua') });
setting.classList.add('hide');
setting.classList.remove('display');
}
seton.onclick = ()=>{
  setting.classList.add('display');
  setting.classList.remove('hide');
}
setoff.onclick = ()=>{
  setting.classList.add('hide');
  setting.classList.remove('display');
}
window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  loader.style.display = 'flex';
  setTimeout(hide,4800);
  document.querySelector('#app').style.display ='';
  document.querySelector('.fh').style.display ='none';
  Particles.init({selector: ".hsw"});
}
function onContextMenu(e){
    e.preventDefault();
    document.addEventListener('contextmenu', onContextMenu, false);
    setTimeout(alertrc, 0);
}
document.addEventListener('contextmenu', onContextMenu, false);

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Hlw,<br><p class="greet">Good Morning</p>';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Hlw,<br><p class="greet">Good Afternoon<p>';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Hlw,<br><p class="greet">Good Evening<p>';

document.getElementById('lblGreetings').innerHTML ='<h1>' + greet +'<h1>'

var particles = Particles.init({
  selector: ".hsw",
  color: ["#00ffe7", "#add8e6", "#00b4ef"],
  connectParticles: true,
   responsive: [
    {
      breakpoint: 800,
      options: {
        color: ["#00ffe7", "#add8e6", "#00b4ef"],
        maxParticles: 40,
        connectParticles: true
      }
    }
  ]
});