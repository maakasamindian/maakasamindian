const header = document.querySelectorAll('.card-header img'),
 title = document.querySelectorAll('.card-title'),
 excerpt = document.querySelectorAll('.card-excerpt span'),
 profile_img = document.querySelectorAll('.profile-img'),
 name = document.querySelectorAll('.publisher'),
 date = document.querySelectorAll('.date'),
 postcard = document.querySelectorAll('.card'),
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
 toabout = document.querySelector('.f2_ab'),
 download= document.querySelector(".download"),
 page1 = document.querySelector('.page1'),
 r2 = document.querySelector('#nav-2'),
 r3 = document.querySelector('#nav-3'),
 r4 = document.querySelector('#nav-4'),
previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow"),
searchWrapper = document.querySelector(".search"),
inputBox = searchWrapper.querySelector("input"),
profilescreen = document.querySelector(".profile-screen"),
link = document.querySelectorAll(".prolink a"),
suggBox = searchWrapper.querySelector(".autocom-box");
      

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
const filterImg = document.querySelectorAll(".post .card ");

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
link.onclick = ()=>{
  profilescreen.classList.add('show');
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

window.onload= ()=>{ //after window loaded
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
  Particles.init({selector: ".hsw"});
  loader.style.display = 'flex';
  document.querySelector('#app').style.display ='';
  document.querySelector('.fh').style.display ='none';
  link.forEach(bgs => { bgs.setAttribute("target", "profile-screen"); });
  for(let i = 0; i < link.length; i++){
    link[i].onclick = () =>{
      profilescreen.classList.add('show');
      profilescreen.classList.remove('hide');
      document.querySelector(".close").classList.add('show');
      document.querySelector(".close").classList.remove('hide');
    }
  }
}
document.querySelector(".close").onclick = ()=>{
    document.querySelector(".close").classList.remove('show');
    document.querySelector(".close").classList.add('hide');
    profilescreen.classList.remove('show');
    profilescreen.classList.add('hide');
}
setTimeout(hide,4800);
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

function preview(element){ //adding onclick attribute in all available images
  //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
  let selectedPrevImg = element.querySelector("img"); 
  document.querySelector(".page2").style.overflow = "hidden";
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector(".page2").style.overflow = "auto"; //show the scroll bar on body
  }
}

(function(){
  
  var searchFilter = {
    options: { valueNames: ['name'] },
    init: function() {
      var userList = new List('people-list', this.options);
      var noItems = $('<div class="error-page"><div><h1 data-h1="404">404</h1><p data-p="NOT FOUND">NOT FOUND</p><h3 style="margin: 0;color: #8f8f8f;">try another keyword</h3></div></div>');
      
      userList.on('updated', function(list) {
        if (list.matchingItems.length === 0) {
          $(list.list).append(noItems);
        } else {
          noItems.detach();
        }
      });
    }
  };
  
  searchFilter.init();
  
})();




// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)")}
    }else{
        searchWrapper.classList.remove("active");//hide autocomplete box
    }
    
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
let suggestions = [
    "ujjwal",
    "minions",
    "background",
    "cute",
    "song",
    "blue",
    "yellow",
    "awesome",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
