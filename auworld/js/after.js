const previewBox = document.querySelector(".preview-box"),
previewimg = previewBox.querySelector("img"),
previewdetail= previewBox.querySelector(".img-detail"),
searchWrapper = document.querySelector(".search"),
inputBox = searchWrapper.querySelector("input"),
profilescreen = document.querySelector(".profile-screen"),
suggBox = searchWrapper.querySelector(".autocom-box"),
header = document.querySelectorAll('.card-header img'),
 title = document.querySelectorAll('.card-title'),
 excerpt = document.querySelectorAll('.card-excerpt span'),
 profile_img = document.querySelectorAll('.profile-img'),
 name = document.querySelectorAll('.publisher'),
 app = document.getElementById("darkmode"),
 image = document.querySelectorAll('.image'),
 date = document.querySelectorAll('.date'),
 postcard = document.querySelectorAll('.card'),
 card = document.querySelectorAll('.card-content'),
 postl = document.querySelectorAll('.postl');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg');

document.querySelector("#ua-2").onclick = ()=>{
  
 setTimeout(getcardData, 1500);
}

function getcardData() {
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

  for(let i = 0; i < image.length; i++){
    image[i].onclick = () =>{
      let dataimage = image[i].getAttribute("src");
      let imagedetail = image[i].getAttribute("title");
      previewimg.setAttribute("src", dataimage);
      previewdetail.innerHTML = imagedetail;
      previewBox.classList.add('show');
      previewBox.classList.remove('hide');
      document.querySelector(".close").classList.add('show');
      document.querySelector(".close").classList.remove('hide');
    }
}
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
$(".js-container-1 script").load('auworld/js/firebase.js');