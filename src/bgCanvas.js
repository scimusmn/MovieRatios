obtain(['µ/canvas.js'], function(cnv) {
  exports.drawBG = function() {
    µ('#bgImg').clear();
    var ctx = µ('#bgImg').ctx;
    ctx.globalAlpha = .15;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(ctx.canvas.width / 4, -5);
    ctx.lineTo(0, ctx.canvas.height);
    ctx.strokeStyle = '#c13828';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(ctx.canvas.width / 4, ctx.canvas.height);
    ctx.lineTo(0, 0);
    ctx.strokeStyle = '#c13828';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(3 * ctx.canvas.width / 4, -5);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#007aa5';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(3 * ctx.canvas.width / 4, ctx.canvas.height);
    ctx.lineTo(ctx.canvas.width, 0);
    ctx.strokeStyle = '#007aa5';
    ctx.stroke();
  };

  provide(exports);
});
