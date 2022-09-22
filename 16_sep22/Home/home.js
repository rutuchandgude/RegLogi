
const deleteBtn = document.querySelector('#delete');

$(document).ready(function () {

    $.getJSON("http://localhost:3000/registration",
            function (data) {
        var user = '';

  
        $.each(data, function (key, value) {
 
             user += '<tr class="row">';
             user += '<td>' +
                value.firstName + '</td>';

                user += '<td>' +
                value.lastName + '</td>';
                
                user += '<td>' +
                value.email + '</td>';
                

                user += '<td>' +
                value.mobileNo + '</td>';

                // user += '<td>' +
                // value.cpassword + '</td>';

                user += '<td>' +
                value.radioBtn + '</td>';
    
                user += '<td>' +
                value.selectStream + '</td>';

                user += '<td id="delete" class="btn"  onclick="deleteRow(this)">Delete</td>' + '<td id="add" class="btn">Add</td>';

                user += '</tr>';


            user += '</tr>';
        });
        
        function Geeks() {
            document.getElementById(user).remove();
        }

        // function deleteRow(btn) {
        //     var row = btn.parentNode.parentNode;
        //     row.parentNode.removeChild(row);
        //   }
        //   deleteRow();

        // var index, table=document.getElementById('table');
        // for(var i=0;i<table.lenght;i++)
        // {
        //     table.rows[i].onclick=function(){
        //         index=this.parentElement.rowIndex;
        //         console.log(index);
        //         console.log(key);
        //     }
        // }
   
        //Inserting row into table
        $('#table').append(user);
    });
});

// function deleteRow(user){
//     var d = user.parentNode.parentNode.rowIndex;
//     document.getElementById('delete').deleteRow(d);
//     console.log("delete");
//  }




            
 