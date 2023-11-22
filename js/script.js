let inputVal = $('#input').val();
let button = $('#button');
let list = $('#list');
let li = $('<li></li>');

li.append(inputVal);


button.on('click', function (e) {
    if (inputVal === undefined) {
        console.log('Please write something.')
    }else {
        list.append(li);
    }
})

    // cross out section, not ready yet
// function crossOut() {
//     li.toggleClass('strike');
// }
// li,on('dblclick', crossOut);

    //pointless function, just want to make the errors stop since its defined in the HTML
function newItem() {
    console.log(inputVal);
}


