 jQuery.fn.datosFeriados = function() {
        var element = this;
        $.ajax({
        type:"GET",
        url:"https://www.feriadosapp.com/api/holidays.json",
        dataType:"json",
        success: function(response) {
   
            let data = response.data

            // data.forEach((ele,index) => {
      
            // element.innerHTML+=$(`<tr><th scope="row">${index}</th><td>${ele.date}</td><td>${ele.title}</td><td>${ele.extra}</td><td>${ele.law}</td></tr>`);
           
            // });


            data.forEach((ele,index) => {
                let row = $('<tr>')
                  .append($('<td>', {text: index }))
                  .append($('<td>', {text: ele.date}))
                  .append($('<td>', {text: ele.title }))
                  .append($('<td>', {text: ele.extra}))
                  .append($('<td>', {text: ele.law}))
                element.append(row)
              })
        }
        });
    
        return this;
    }




