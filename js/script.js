// File Eksternal JavaScript

let bannerNum = 0;

function changeBanner(){
    displayBanner();
    bannerNum++;
};

// Function to show and hide the banner
function displayBanner(){
    let banner = document.getElementsByClassName('img-banner');

    // Repeat the banner
    if(bannerNum > banner.length-1){
        bannerNum = 0;
    }

    // Hide all banner
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }
    
    // Show banner
    banner[bannerNum].style.display = 'block'; 
};

setInterval(changeBanner, 3000); // Change banner every 3 seconds