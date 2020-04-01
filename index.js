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

    // <li>
    //     <span class="shopping-item">apples</span>
    //     <div class="shopping-item-controls">
    //       <button class="shopping-item-toggle">
    //         <span class="button-label">git check</span>
    //       </button>
    //       <button class="shopping-item-delete">
    //         <span class="button-label">delete</span>
    //       </button>
    //     </div>
    //   </li>

//**ADD *//
    $('#js-shopping-list-form').on('submit', function addItem(e){
        e.preventDefault();
        var itemInput = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + '<span class="shopping-item">' + itemInput + '</span>'
            + '<div class="shopping-item-controls">' 
            + '<button class="shopping-item-toggle">'
                + '<span class="button-label">check</span>'
            + '</button>'
            + '<button class="shopping-item-delete">'
                + '<span class="button-label">delete</span>'
            +'</button>'
            + '</div>' 
        + '</li>');
    });

//**REMOVE *//
  $('.shopping-item-delete').click( function deleteItem(e){
        e.preventDefault();
        var itemToRemove = $(this).parent().parent();
        itemToRemove.fadeOut(function(){
        }); 
    });

//**CHECK *//
$('.shopping-item-toggle').click( function (e) {
    e.preventDefault();
    $(this).closest('.shopping-item').toggleClass('shopping-item__checked');
    });