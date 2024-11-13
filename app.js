const input = document.getElementById('input');
const enterButton = document.getElementById('enterButton');
const display = document.getElementById('display');
const deleteButton = document.getElementById('deleteButton');
const clearButton = document.getElementById('clearButton');

//this will add to the table for display
enterButton.addEventListener('click', (e)=>{
    
    const checkbox = document.createElement('input');
    checkbox.type = checkbox;
    
    if(input.value === '') alert("Cannot be Empty");
    
    else {
        e.preventDefault();
        display.innerHTML += `<td><input type=checkbox class=check></td><td>${input.value}</td>`;
        input.value = ''; 
    };
});

deleteButton.addEventListener('click', ()=>{
    //in cases where there is a consecutive deletion (i.e. 1 & 2 then the reverse will account for the change index)
    for(let curr = display.rows.length - 1; 2 <= curr; curr--){
        //this will get the input cell **important with the [0] for the getElements **
        if(display.rows[curr].cells[0].getElementsByClassName('check')[0].checked){
            display.deleteRow(curr);
        }
    }
})

//stopping at 2 because the table has the headers, and those need to be untouched.
clearButton.addEventListener('click', ()=>{
    for(let curr = display.rows.length -1; 2 <= curr; curr--) display.deleteRow(curr)
})

