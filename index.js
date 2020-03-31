'use strict';

//**REFERENCE**//
// <form id="js-shopping-list-form">
    //   <label for="shopping-list-entry">Add an item</label>
    //   <input type="text" name="shopping-list-entry" id="shopping-list-entry" placeholder="e.g., broccoli">
    //   <button type="submit">Add item</button>
    // // </form>

    // <ul class="shopping-list">
    //   <li>
    //     <span class="shopping-item">apples</span>
    //     <div class="shopping-item-controls">


    $('#js-shopping-list-form').on('submit', function addItem(e){
        e.preventDefault();
        var text = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + text + '</li>');
      });


$('.shopping-list').addItem(function(){
    e.preventDefault();
    $('.li').addClass('shopping-item');
});


// $(document).ready(function(){
//     e.preventDefault();
//     $('.shopping-list').addClass('shopping-item');
// });
