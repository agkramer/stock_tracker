var body = {

};

// var url = "http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json"
//
// $.ajax({
//   url: url,
//   success: function(data){
//     console.log("Successful Request")
//     console.log(data)
//
//     $.each(data, function(index, item){
//       $("#list").append("<li>" + item.name + "</li>" )
//     })
//   }
// })


$.ajax({
   type: 'GET',
   crossOrigin: true,
   url: 'http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote',
   dataType: 'json',
   success: function(data){
     console.log(data);
   }
});
