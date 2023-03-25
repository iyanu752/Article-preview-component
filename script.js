document.getElementById("button").addEventListener('click', () => {
   if (document.querySelector(".share").style.display === 'none'){
    document.querySelector(".share").style.display = "flex";
   } else {
    document.querySelector(".share").style.display = "none";
   } 

   if (document.querySelector(".triangle").style.display === 'none'){
    document.querySelector(".triangle").style.display = "flex";
   } else {
    document.querySelector(".triangle").style.display = "none";
   } 
    
});


document.getElementById("mobile-button").addEventListener('click', () => {
    if (document.querySelector(".share").style.display === 'none'){
        document.querySelector(".share").style.display = "flex";
       } else {
        document.querySelector(".share").style.display = "none";
       } 
       
});

