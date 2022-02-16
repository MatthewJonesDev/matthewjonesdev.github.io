/* Search bar toggle */
function searchBar() {
  var x = document.getElementById("search-bar");
  var y = document.getElementById("search-bar-elements");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";  
  } else {
    x.style.visibility = "visible";
  }

  if (x.style.transitionDelay === "0ms") {
    x.style.transitionDelay  = "200ms";
  } else {
    x.style.transitionDelay  = "0ms";
  }

  if (x.style.animationName === "search-expand") {
    x.style.animationName = "search-collapse";
  } else {
    x.style.animationName = "search-expand";
  }

  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";  
  } else {
    y.style.visibility = "visible";
  }

  if (y.style.transitionDelay === "100ms") {
    y.style.transitionDelay  = "0ms";
  } else {
    y.style.transitionDelay  = "100ms";
  }

  if (y.style.opacity === "1") {
    y.style.opacity = "0";  
  } else {
    y.style.opacity = "1";
  } 
}

/* Basket toggle */
function basket() {
  var element = document.body;
  var x = document.getElementById("basket");
  var y = document.getElementById("basket-background");
  var z = document.getElementById("basket-elements");

  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";  
  } else {
    x.style.visibility = "visible";
  }

  if (x.style.transitionDelay === "0ms") {
    x.style.transitionDelay  = "400ms";
  } else {
    x.style.transitionDelay  = "0ms";
  }

  if (x.style.animationName === "basket-expand") {
    x.style.animationName = "basket-collapse";
  } else {
    x.style.animationName = "basket-expand";
  }

  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";  
  } else {
    y.style.visibility = "visible";
  }

  if (y.style.opacity === "1") {
    y.style.opacity = "0";  
  } else {
    y.style.opacity = "1";
  } 

  if (z.style.visibility === "visible") {
    z.style.visibility = "hidden";  
  } else {
    z.style.visibility = "visible";
  }

  if (z.style.opacity === "1") {
    z.style.opacity = "0";  
  } else {
    z.style.opacity = "1";
  } 

  element.classList.toggle("no-scroll");
}

/* Mobile nav toggle */
function mobileNav() {
  var element = document.body;
  var x = document.getElementById("mobile-nav");
  var y = document.getElementById("mobile-nav-background");
  var z = document.getElementById("mobile-nav-elements");
  var v = document.getElementById("product-content");

  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";  
  } else {
    x.style.visibility = "visible";
  }

  if (x.style.transitionDelay === "0ms") {
    x.style.transitionDelay  = "400ms";
  } else {
    x.style.transitionDelay  = "0ms";
  }

  if (x.style.animationName === "mobile-nav-expand") {
    x.style.animationName = "mobile-nav-collapse";
  } else {
    x.style.animationName = "mobile-nav-expand";
  }

  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";  
  } else {
    y.style.visibility = "visible";
  }

  if (y.style.opacity === "1") {
    y.style.opacity = "0";  
  } else {
    y.style.opacity = "1";
  } 

  if (z.style.visibility === "visible") {
    z.style.visibility = "hidden";  
  } else {
    z.style.visibility = "visible";
  }

  if (z.style.opacity === "1") {
    z.style.opacity = "0";  
  } else {
    z.style.opacity = "1";
  } 

  if (v.style.visibility === "hidden") {
    v.style.visibility = "visible";  
  } else {
    v.style.visibility = "hidden";
  }

  element.classList.toggle("no-scroll");
}

/* Mobile nav products toggle */
function productBtn() {
  var x = document.getElementById("product-content");
  var y = document.getElementById("fa-minus");
  var z = document.getElementById("fa-plus");

  if (x.style.paddingTop === "1.5rem") {
    x.style.paddingTop = "0rem";  
  } else {
    x.style.paddingTop = "1.5rem";
  }

  if (x.style.height === "6.5rem") {
    x.style.height = "0rem";  
  } else {
    x.style.height = "6.5rem";
  }

  if (x.style.opacity === "1") {
    x.style.opacity = "0";  
  } else {
    x.style.opacity = "1";
  }

  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";  
  } else {
    x.style.visibility = "visible";
  }

  if (x.style.animationName === "product-content-expand") {
    x.style.animationName = "product-content-collapse";
  } else {
    x.style.animationName = "product-content-expand";
  }

  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }

  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

