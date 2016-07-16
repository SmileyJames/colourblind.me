$(function () {
  var t = '' +
  '<div id="colourblindme-controls">' +
  '  <button>colour blind me</button>' +
  '  <select>' +
  '    <option>Type</option>' +
  '  </select>' +
  '</div>';

  var e = $(t);
  $('body').append(e);

  var button = e.find('button');
  var button = e.find('select');

  $('<link/>', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'stylesheet.css'
  }).appendTo('head');

  html2canvas(document.body).then(function(canvas) {
    canvas.id = "colourblindme-canvas"
    document.body.appendChild(canvas);
  });
});
