$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].Movie_id+ '</td><td>' + data[i].Character + '</td><td>' + data[i].First_Name + '</td><td>' + data[i].Last_Name + '</td><td>' + data[i].Role + '</td></tr>');
            $('#MovieTable').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
$(document).ready(function(){  
           $('#search').keyup(function(){  
                search_table($(this).val());  
           });  
           function search_table(value){  
                $('#MovieTable tr').each(function(){  
                     var found = 'false';  
                     $(this).each(function(){  
                          if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                          {  
                            found = 'true';  
                            $(this).css('bgcolor', 'green'); 
                        $(this).css('color', 'white');
                       }  
                       else{
                           $(this).css('background', 'green'); 
                        $(this).css('color', 'black');
                       }
                  });    
             });  
        }  
   });  
