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


    $('#js-shopping-list-form').on('submit', function addItem(e){
        e.preventDefault();
        var text = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + '<span class="shopping-item">' + text + '</span>' + 
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
            
{/* //       </div> + text + '</li>' */}

// $('.shopping-list').addItem(function(){
//     e.preventDefault();
//     $('li').toggleClass('shopping-item');
// });


// $(document).ready(function(){
//     e.preventDefault();
//     $('.shopping-list').addClass('shopping-item');
// });
