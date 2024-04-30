function plot() {
  var audio = new Audio("result0.wav");
  audio.play();
  Plotly.d3.csv(
    "./beats_res.csv",
    function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }

      var frames = [];
      console.log(rows);
      var y = unpack(rows, 0);
      var x = [];

      for (var i = 1; i <= y.length; i++) {
        x.push(i);
      }

      console.log(x);
      console.log(y);

      var n = 993;
      for (var i = 0; i < n; i++) {
        frames[i] = { data: [{ x: [], y: [] }] };
        frames[i].data[0].x = x.slice(0, i + 1);
        frames[i].data[0].y = y.slice(0, i + 1);
      }

      Plotly.newPlot("myDiv", [{
        x: frames[1].data[0].x,
        y: frames[1].data[0].y,
        fill: "tozeroy",
        type: "scatter",
        mode: "lines",
        line: { color: "green" },
      }], {
        xaxis: {
          range: [
            0,
            993,
          ],
          showgrid: true,
          showline: true,
          showticklabels: true,
          zeroline: false,
        },
        yaxis: {
          range: [
            0,
            2,
          ],
          showgrid: true,
          showline: true,
          showticklabels: true,
          zeroline: false,
        },
        annotations: [{
          showarrow: false,
          text: "<b>TESTING</b>",
          font: {
            family: "Gravitas One",
            size: 48,
            color: "white",
          },
          xref: "paper",
          yref: "paper",
          x: 0.5,
          y: 0.5,
        }, {
          showarrow: false,
          text: "testing | testing | testing",
          font: {
            family: "Gravitas One",
            size: 16,
            color: "white",
          },
          xref: "paper",
          yref: "paper",
          x: 0.5,
          y: 0.35,
        }],
      }).then(function () {
        Plotly.animate("myDiv", frames, {
          transition: {
            duration: 0,
          },
          frame: {
            duration: 32.45,
            redraw: false,
          },
        });
      });
    },
  );
}
