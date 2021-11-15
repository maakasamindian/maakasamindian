const header = document.querySelectorAll('.card-header img');
const title = document.querySelectorAll('.card-title');
const excerpt = document.querySelectorAll('.card-excerpt span');
const profile_img = document.querySelectorAll('.profile-img');
const name = document.querySelectorAll('.name');
const date = document.querySelectorAll('.date');
const card = document.querySelectorAll('.card-content');
const postl = document.querySelectorAll('.postl');
const nav2 = document.getElementById('ua-2');
const inpu = document.querySelectorAll('.in-pu');
const anim = document.getElementById('anim');
const nav1 = document.getElementById('ua-3');
const nav4 = document.getElementById('ua-1');
const setting = document.querySelector('.setting');
const seton = document.querySelector('.seton')
const setoff = document.querySelector('.setoff')

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
}

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Hlw,<br><p class="greet">Good Morning</p>';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Hlw,<br><p class="greet">Good Afternoon<p>';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Hlw,<br><p class="greet">Good Evening<p>';

document.getElementById('lblGreetings').innerHTML ='<h1>' + greet +'<p class="intro">welcome to UAworld. I hope<br>you are fine and enjoying<br>your life with happiness</p><h1>'
