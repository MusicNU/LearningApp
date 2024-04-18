function plot() {
  console.log("plot");
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
      var x = unpack(rows, 0);
      var y = unpack(rows, 1);

      var n = 100;
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
          type: "date",
          range: [
            frames[99].data[0].x[0],
            frames[99].data[0].x[99],
          ],
          showgrid: false,
          showline: false,
          showticklabels: false,
          zeroline: false,
        },
        yaxis: {
          range: [
            0,
            90,
          ],
          showgrid: false,
          showline: false,
          showticklabels: false,
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
            duration: 20,
            redraw: false,
          },
        });
      });
    },
  );
}
