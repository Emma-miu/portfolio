document.addEventListener("DOMContentLoaded", function () {
  anchorLink();
  tabChange();


  //==========
  // Anchor Link + smooth scroll
  //==========
  function anchorLink() {
    var anchor = Array.from(document.querySelectorAll(".js-link"));
    anchor.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        var id = e.target.hash.slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' }, false);
      });
    });
  }

  
  //==========
  // Tab change
  //==========
  function tabChange() {
    const tabList = document.querySelectorAll('.js-tab-trigger');
    const tabContent = document.querySelectorAll('.js-tab-content');

    if(tabList) {
      // Apply click event to tab
      for(let i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener('click', tabSwitch);
      }

      // Function to execute when tab is clicked
      function tabSwitch(){
        // delete is-active class
        document.querySelectorAll('.is-current')[0].classList.remove('is-current');
        // add is-active class to clicked tab
        this.classList.add('is-current');
        // delete is-shown class
        document.querySelectorAll('.is-shown')[0].classList.remove('is-shown');
        // Define tabs as array-like objects
        const aryTabs = Array.prototype.slice.call(tabList);
        // Get the array number of the clicked tab
        const index = aryTabs.indexOf(this);
        // Assign the show class to the tab content with the same array number as the clicked tab    
        tabContent[index].classList.add('is-shown');
      };
    }
  }

  // let elementsArray = document.querySelectorAll(".ly-section");
  // window.addEventListener('scroll', fadeIn ); 
  // function fadeIn() {
  //   for (var i = 0; i < elementsArray.length; i++) {
  //       var elem = elementsArray[i]
  //       var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
  //       if (distInView < 0) {
  //           elem.classList.add("inView");
  //       } else {
  //           elem.classList.remove("inView");
  //       }
  //   }
  // }
  // fadeIn();

})