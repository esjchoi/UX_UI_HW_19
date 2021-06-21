function myFunction(x) {
    x.classList.toggle("change");
  }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        
      }
    }
  }
}

  const texts=["Nurse","boba fanatic","UX Designer"];
  let count=0;
  let index=0;
  let currentText= "";
  let letter= "";

  (function type(){
    if (count === texts.length){
      count=0;
    }
    currentText=texts[count];
    letter=currentText.slice(0,++index);
    
    document.querySelector(".typing").textContent=letter;
    if (letter.length === currentText.length){
      count++;
      index=0;
    }
    setTimeout(type,400);
  })();
