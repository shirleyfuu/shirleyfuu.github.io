jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Python Chart
  var doughnutData = [{
      value: 80,
      color: "#1abc9c"
    },
    {
      value: 20,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // MATLAB Chart
  var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("matlab").getContext("2d")).Doughnut(doughnutData);

  // LaTex Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("latex").getContext("2d")).Doughnut(doughnutData);

  // MSOffice Chart
  var doughnutData = [{
    value: 95,
    color: "#1abc9c"
  },
  {
    value: 5,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("msoffice").getContext("2d")).Doughnut(doughnutData);

  // C Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("c").getContext("2d")).Doughnut(doughnutData);
  
  // R Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("r").getContext("2d")).Doughnut(doughnutData);

  // SPSS Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("spss").getContext("2d")).Doughnut(doughnutData);

  // Wind Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("wind").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("ps").getContext("2d")).Doughnut(doughnutData);
});
