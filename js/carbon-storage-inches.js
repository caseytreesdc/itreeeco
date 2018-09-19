  google.charts.load('current', {packages:['corechart']});
  google.charts.setOnLoadCallback(drawExample2);

  function drawExample2() {
    // Some raw data (not necessarily accurate)
    var rowData1 = [['Inches', '2" DBH', '12" DBH', '24" DBH'],
                    ['American Beech', 9, 545, 2642],
                    ['Tulip Tree', 5, 350, 1842],
                    ['American Elm', 5, 355, 1874],
                    ['Common crapemyrtle', 6, 408, 2171]
                    ];
    var rowData2 = [['Tree', 'American Beech', 'Tulip Tree', 'American Elm', 'Common crapemyrtle'],
                    ['2" DBH', 5, 9, 5, 6],
                    ['12" DBH', 355, 545, 350, 408],
                    ['24" DBH', 1874, 2642, 1842, 2171]
                    ];            

    // Create and populate the data tables.
    var data = [];
    data[0] = google.visualization.arrayToDataTable(rowData1);
    data[1] = google.visualization.arrayToDataTable(rowData2);

    var options = {
      vAxis: {title: "Carbon Storage (lb)", minValue:0, maxValue:1000, scaleType: 'log'},
      hAxis: {title: "Tree Species"},
      seriesType: "bars",
      colors: ['#75ceaf', '#f5a447', '#7570b3', '#076324'],
      animation:{
        duration: 1000,
        easing: 'out'
      }
    };
    var current = 0;
    // Create and draw the visualization.
    var chart = new google.visualization.ComboChart(document.getElementById('example2-visualization'));
    var button = document.getElementById('example2-b1');
    function drawChart() {
       // Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button.disabled = false;
            button.value = 'Switch to ' + (current ? 'Species' : 'Size');
          });
      options['title'] = 'Carbon ' + (current ? 'Storage' : 'Storage');

      chart.draw(data[current], options);
    }
    drawChart();

    button.onclick = function() {
      current = 1 - current;
      drawChart();
    }
  }
