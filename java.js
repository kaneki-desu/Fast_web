
    // Add a class to the body when scrolling down to fix the navbar
    window.onscroll = function() {
      if (window.scrollY > 20) {
        document.body.classList.add("fixed-navbar");
      } else {
        document.body.classList.remove("fixed-navbar");
      }
    };
  