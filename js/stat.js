// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 160, 25);
  ctx.fillText('Список результатов:', 160, 40);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var gistogramParams = {
    itemWidth: 40,
    indent: 50,
    initialX: 120,
    initialY: 260,
    lineBottom: 15
  };

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  // var itemWidth = 40;
  // var indent = 50;
  // var initialX = 120;
  // var initialY = 260;
  // var lineBottom = 15;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 153, ' + Math.random() + ')';
    }
    ctx.fillRect(gistogramParams.initialX + 1.5 * gistogramParams.indent * i + gistogramParams.itemWidth,
        gistogramParams.initialY, gistogramParams.itemWidth, times[i] * step - gistogramParams.initialY);
    ctx.fillText(names[i], gistogramParams.initialX + 1.5 * gistogramParams.indent * i + gistogramParams.itemWidth,
        times[i] * step - gistogramParams.lineBottom);
    ctx.fillText(times[i].toFixed(2), gistogramParams.initialX + 1.5 * gistogramParams.indent * i + gistogramParams.itemWidth,
        gistogramParams.initialY + gistogramParams.lineBottom);
  }
};

