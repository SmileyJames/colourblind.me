$(function () {
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
  body.append(select);

  select.change(function () {
    var value = select.val();
    if (value === '') {
      body.css({
          '-webkit-filter': 'none',
          'filter': 'none',
      });
    } else {
      body.css({
          '-webkit-filter': 'url("filters.svg#' + value + '"),',
          'filter': 'url("filters.svg#' + value + '")',
      });
    }
  });
});
