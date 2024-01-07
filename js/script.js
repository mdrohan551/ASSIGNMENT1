let main_menu = document.querySelector('.main_menu');
let bars = document.querySelector('.bars');
let crose = document.querySelector('.crose');

function toggl() {
   main_menu.classList.toggle('active')

   if (main_menu.classList.contains('active')) {
      bars.style.display = 'none'
      crose.style.display = 'block'
   } else if (bars.style.display = 'block') {
      bars.style.display = 'block'
      crose.style.display = 'none'
   } else {
      bars.style.display = 'block'
   }
   window.addEventListener('click', function (e) {
      if (e.target === main_menu) {
         main_menu.classList.remove('active')
         crose.style.display = 'none'
         bars.style.display = 'block'
      }
   });


}
// click main_menu end 
window.addEventListener('scroll', () => {
   // nav bar sticy part start
   let nav = document.getElementById('nav');
   nav.classList.toggle('stck', window.scrollY > 0)
   // nav bar sticy part end================================================>
})
window.addEventListener('scroll', () => {

   let backIcon = document.querySelector('.backIcon');
   // back button start
   if (window.pageYOffset > 100) {
      backIcon.classList.add('topicon')
   } else {
      backIcon.classList.remove('topicon')
   }
   // back button start end
})

// age varification

function popups() {

   let fileInput = document.getElementById("fileInput").value.trim();
   let popup_success = document.getElementById("popup_success");
   let success = document.getElementById("success");
   let popup_notsuccess = document.getElementById("popup_notsuccess");
   if (fileInput >= 18) {
          // Audio
          let correct = document.getElementById('correct');
          // Audio
          correct.play()
      popup_success.style.width = '100%'
      success.style.transform = 'scaleX(1)' + 'translate(-50%,-50%) '
      not_filup.textContent='You are an Adult !'
      not_filup.style.color='green'
      let popup =document.getElementById("popup");
      popup.style.background='#2bb3f2'
   } 
   
   
   else if (fileInput === '') {
      // Audio
      let wrong = document.getElementById('wrong');
      // Audio
      wrong.play();
      // not_filup.classList.toggle('red')
      not_filup.textContent='Please fill in this field'
      not_filup.style.color='red'
      let popup =document.getElementById("popup");
      popup.style.background='red'
      success.style.transform = 'scaleX(0)' + 'translate(-50%,-50%) '
   } 
   else if (fileInput != '') {
       // Audio
       let looser = document.getElementById('looser');
       // Audio
       looser.play();
      popup.style.background='#2bb3f2'
      not_filup.textContent='Make sure you are 18+ or younger'
      not_filup.style.color='black'
      success.style.transform = 'scaleX(0)' + 'translate(-50%,-50%) '
      popup_success.style.width = '100%'
      popup_notsuccess.style.transform = 'scaleX(1)' + 'translate(-50%,-50%) '
   } 
   
   else if (fileInput <= 17) {
          // Audio
          let looser = document.getElementById('looser');
          // Audio
          looser.play()
      popup_success.style.width = '100%'
      popup_notsuccess.style.transform = 'scaleX(1)' + 'translate(-50%,-50%) '
   }   
  
   else {
      let popup_success = document.getElementById("popup_success");
      let closePopup = document.getElementById("closePopup");
      popup_success.style.width = '0'
      popup_notsuccess.style.transform = 'scaleX(0)'
      success.style.transform = 'scale(0)' 
      success.style.left = '50%'
   }
   window.addEventListener('click', function (e) {
      if (e.target === popup_success) {
         let popup_success = document.getElementById("popup_success");
      let closePopup = document.getElementById("closePopup");
      popup_success.style.width = '0'
      popup_notsuccess.style.transform = 'scaleX(0)'
      success.style.transform = 'scale(0)' + 'translate(-0%,-0%) '
      success.style.left = '50%'
         closeCard()
      }
   });
}
function closeCard() {
   if (popup_success.style.width = '100%') {
      let popup_success = document.getElementById("popup_success");
      let closePopup = document.getElementById("closePopup");
      popup_success.style.width = '0';
      popup_notsuccess.style.transform = 'scaleX(0)';
      success.style.transform = 'scale(0)' + 'translate(-0%,-0%) ';
      success.style.left = '50%';
   }
}
ScrollReveal().reveal('.main_content',{
   delay: 375,
   duration: 500,
   reset: true,
   distance: '60px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.cards',{
   delay: 375,
   duration: 500,
   reset: true,
   distance: '60px',
   origin: 'top' 
});
ScrollReveal().reveal('.form',{
   delay: 375,
   duration: 500,
   reset: true,
   distance: '35px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.add',{
   delay: 375,
   duration: 500,
   reset: true,
   distance: '35px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.fot_last',{
   delay: 375,
   duration: 500,
   reset: true,
   distance: '35px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.footer_social_icon',{
   delay: 375,
   duration: 500,
   reset: true,
   distance: '35px',
   origin: 'bottom' 
});

// dynamic audio 
// window.addEventListener('click', () =>{
//  let song = document.getElementById('song');
//  song.play();
// })
// dynamic audio 
