'use strict';
$(document).ready(function(){
    $('#searchUser').on('keyup', (e) =>{
        let username = e.target.value;

        //make request to github
        $.ajax({
            url: 'https://api.github.com/users/'+username,
            data:{
                client_id:'7d04228b3c046e3c73d1',
                client_secret:'bfc0a840f9b7b7a339ba9aca6096224c290b5634'
            }

        }).done( (user) =>{
        $('#profile').html(`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
               <div class="row">
               <div class="col-md-3">
               <img class="thumbnail" src="${user.avatar_url}">
               </div>

               <div class="col-md-9">
               </div>
               </div>
            </div>
        </div>
        
        `);
    });
});

});