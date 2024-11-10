const input = document.getElementById('input');
const enterButton = document.getElementById('enterButton');
const display = document.getElementById('display');
const deleteButton = document.getElementById('deleteButton');
const tr = document.getElementsByTagName('tr'); //access to the table rows

//this will add to the table for display
enterButton.addEventListener('click', ()=>{
    const checkbox = document.createElement('input');
    checkbox.type = checkbox;
    
    if(input.value === '') alert("Cannot be Empty");
    else {
        
        display.innerHTML += `<td><input type=checkbox class=check></td><td>${input.value}</td>`;
        input.value = ''; 
        
    };
});

deleteButton.addEventListener('click', ()=>{
    for(let curr = 0; curr < tr.length; curr+=2) {
        console.log(`${tr[curr]}`)
    }
})

