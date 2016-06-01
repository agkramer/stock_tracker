$(".add-symbol").click(function () {
  var add_symbol = $('#symbol').val();
  $('.symbol-list').append(
    '<tr>' +
      '<td>' + add_symbol + '</td>' +
      '<td><input type="button" value="Remove" onclick="SomeDeleteRowFunction(this);"></td>' +
    '</tr>'
  );
  $('#symbol-form').each(function(){
    this.reset();
  });
});

function SomeDeleteRowFunction(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
  } else {
      return false;
  }
}
