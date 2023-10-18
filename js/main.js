var chrt = document.getElementById("chartId").getContext("2d");


      var chartId = new Chart(chrt, {
         type: 'doughnut',
         data: {
            labels: ["Present: 75%", "Absent: 25%"],
            datasets: [{
            label: "Attendance",
            data: [75, 25],
            backgroundColor: ['green', 'red'],
            hoverOffset: 5
            }],
         },
         options: {
            responsive: false,
         },
         
      });