const 
 nav2 = document.getElementById('ua-2'),
 inpu = document.querySelectorAll('.in-pu'),
 nav1 = document.getElementById('ua-3'),
 nav4 = document.getElementById('ua-1'),
 setting = document.querySelector('.setting'),
 seton = document.querySelector('.seton'),
 setoff = document.querySelector('.setoff'),
 loader = document.querySelector('.loader'),
 topost = document.querySelector(".f1_ab"),
 toabout = document.querySelector('.f2_ab'),
 download= document.querySelector(".download"),
 page1 = document.querySelector('.page1'),
 r1 = document.querySelector('#nav-4'),
 r2 = document.querySelector('#nav-2'),
 r3 = document.querySelector('#nav-3'),
 r4 = document.querySelector('#nav-4');

anim.onclick = ()=>{
   inpu.forEach(bgs => { bgs.classList.add('in-pua') });
   setting.classList.add('hide');
  setting.classList.remove('display');
  document.querySelector(".page3").classList.add('acton');
  document.querySelector(".page1").classList.remove('acton');
  document.querySelector(".page2").classList.remove('acton');
  document.querySelector(".page4").classList.remove('acton');
}
nav2.onclick = ()=>{
  inpu.forEach(bgs => { bgs.classList.remove('in-pua') });
  setting.classList.add('hide');
  setting.classList.remove('display');
  document.querySelector(".page2").classList.add('acton');
  document.querySelector(".page1").classList.remove('acton');
  document.querySelector(".page3").classList.remove('acton');
  document.querySelector(".page4").classList.remove('acton');
  
}
nav1.onclick = ()=>{
  inpu.forEach(bgs => { bgs.classList.remove('in-pua') });
  setting.classList.add('hide');
  setting.classList.remove('display');
  document.querySelector(".page1").classList.add('acton');
  document.querySelector(".page2").classList.remove('acton');
  document.querySelector(".page3").classList.remove('acton');
  document.querySelector(".page4").classList.remove('acton');
}

      
function alertrc() {
  alert('right click is disable!!');
}
function hide() {
  loader.classList.add('hide');
}
toabout.onclick = ()=>{
  inpu.forEach(bgs => { bgs.classList.add('in-pua') });
}
nav4.onclick = ()=>{
inpu.forEach(bgs => { bgs.classList.remove('in-pua') });
setting.classList.add('hide');
setting.classList.remove('display');
document.querySelector(".page4").classList.add('acton');
  document.querySelector(".page2").classList.remove('acton');
  document.querySelector(".page3").classList.remove('acton');
  document.querySelector(".page1").classList.remove('acton');
}
seton.onclick = ()=>{
  setting.classList.add('display');
  setting.classList.remove('hide');
}
setoff.onclick = ()=>{
  setting.classList.add('hide');
  setting.classList.remove('display');
}
topost.onclick = ()=> {
  setTimeout(getcardData, 2500);
}
window.onload= ()=>{ //after window loaded
  Particles.init({selector: ".hsw"});
  loader.style.display = 'flex';
  document.querySelector('#app').style.display ='';
  document.querySelector('.fh').style.display ='none';

}

document.querySelector(".close").onclick = ()=>{
    document.querySelector(".close").classList.remove('show');
    document.querySelector(".close").classList.add('hide');
    profilescreen.classList.remove('show');
    profilescreen.classList.add('hide');
    previewBox.classList.add('hide');
      previewBox.classList.remove('show');
}

document.querySelector(".homedp").onclick = ()=>{
    document.querySelector(".close").classList.remove('hide');
    document.querySelector(".close").classList.add('show');
    profilescreen.classList.remove('hide');
    profilescreen.classList.add('show');
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