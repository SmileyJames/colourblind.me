if (window.jQuery === undefined) {
  console.warn("colourblind.me requires jQuery");
} else {
  $(function () {
    var filters = '' +
    '<svg' +
    '  xmlns="http://www.w3.org/2000/svg"' +
    '  version="1.1">' +
    '  <defs>' +
    '    <filter id="protanopia">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.567, 0.433, 0,     0, 0' +
    '                0.558, 0.442, 0,     0, 0' +
    '                0,     0.242, 0.758, 0, 0' +
    '                0,     0,     0,     1, 0"/>' +
    '    </filter>' +
    '    <filter id="protanomaly">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.817, 0.183, 0,     0, 0' +
    '                0.333, 0.667, 0,     0, 0' +
    '                0,     0.125, 0.875, 0, 0' +
    '                0,     0,     0,     1, 0"/>' +
    '    </filter>' +
    '    <filter id="deuteranopia">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.625, 0.375, 0,   0, 0' +
    '                0.7,   0.3,   0,   0, 0' +
    '                0,     0.3,   0.7, 0, 0' +
    '                0,     0,     0,   1, 0"/>' +
    '    </filter>' +
    '    <filter id="deuteranomaly">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.8,   0.2,   0,     0, 0' +
    '                0.258, 0.742, 0,     0, 0' +
    '                0,     0.142, 0.858, 0, 0' +
    '                0,     0,     0,     1, 0"/>' +
    '    </filter>' +
    '    <filter id="tritanopia">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.95, 0.05,  0,     0, 0' +
    '                0,    0.433, 0.567, 0, 0' +
    '                0,    0.475, 0.525, 0, 0' +
    '                0,    0,     0,     1, 0"/>' +
    '    </filter>' +
    '    <filter id="tritanomaly">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.967, 0.033, 0,     0, 0' +
    '                0,     0.733, 0.267, 0, 0' +
    '                0,     0.183, 0.817, 0, 0' +
    '                0,     0,     0,     1, 0"/>' +
    '    </filter>' +
    '    <filter id="achromatopsia">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.299, 0.587, 0.114, 0, 0' +
    '                0.299, 0.587, 0.114, 0, 0' +
    '                0.299, 0.587, 0.114, 0, 0' +
    '                0,     0,     0,     1, 0"/>' +
    '    </filter>' +
    '    <filter id="achromatomaly">' +
    '      <feColorMatrix' +
    '        in="SourceGraphic"' +
    '        type="matrix"' +
    '        values="0.618, 0.320, 0.062, 0, 0' +
    '                0.163, 0.775, 0.062, 0, 0' +
    '                0.163, 0.320, 0.516, 0, 0' +
    '                0,     0,     0,     1, 0"/>' +
    '    </filter>' +
    '  </defs>' +
    '</svg>';

    var t = '' +
    '<select id="colourblindme-select">' +
    '  <option value="">Normal</option>' +
    '  <option value="protanopia">Protanopia</option>' +
    '  <option value="protanomaly">Protanomaly</option>' +
    '  <option value="deuteranopia">Deuteranopia</option>' +
    '  <option value="deuteranomaly">Deuteranomaly</option>' +
    '  <option value="tritanopia">Tritanopia</option>' +
    '  <option value="tritanomaly">Tritanomaly</option>' +
    '  <option value="achromatopsia">Achromatopsia</option>' +
    '  <option value="achromatomaly">Achromatomaly</option>' +
    '</select>';

    var body = $('body');
    var select = $(t);
    select.css({
      position: "fixed",
      top: "5%",
      right: "3%",
    });
    body.after(select);

    select.change(function () {
      var value = select.val();
      if (value === '') {
        body.css({
            '-webkit-filter': 'none',
            'filter': 'none',
        });
      } else {
        body.css({
            '-webkit-filter': 'url(data:image/svg+xml,' + escape(filters) + '#' + value + ')',
            'filter': 'url(data:image/svg+xml,' + escape(filters) + '#' + value + ')',
        });
      }
    });
  });
}
