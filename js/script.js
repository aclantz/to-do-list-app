function newItem () {
    let inputVal = $('#input').val();
    let list = $('#list');
    let li = $('<li></li>');
    
        //1. adding new list item
    li.append(inputVal);
        
    if (inputVal === '') {
        console.log('Please write something.')
    }else {
        list.append(li);
    }

        //2. crossing out an item 
    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('dblclick', function(e) {
        crossOut();
    });

        //3. Add a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteItem)
    function deleteItem() {
        li.addClass('delete');
    }

        //4. change order of items
    list.sortable()
}

