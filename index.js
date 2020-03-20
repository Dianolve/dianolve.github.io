var url = 'https://dog.ceo/api/breeds/image/random';


$(window).scroll(function() {   
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        for(let i=0;i<5;i++){
            renderItem();
          }  
    }
 });
window.onload = function() {
    for(let i=0;i<5;i++){
        renderItem();
      }    
}
window.onscroll = function() {
    myFunction();
}

function changeURL() {
  var urrrl = document.getElementById('urlname');
  url = urrrl.value;
var elements = document.body.getElementsByClassName('dog-img');

for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
  for(let i=0;i<5;i++){
    renderItem();
  }   
}

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

function renderItem(){
    fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        
      let item = document.createElement('div');
      item.classList.add('item');
      console.log(response.text())
      item.innerHTML = `<img class="dog-img" src="${data.message}" alt="dog"/>`     
      document.body.appendChild(item);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
