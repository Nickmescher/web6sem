let go = document.querySelector('.go');
let text = document.querySelector('input[type=text]');
let ul = document.querySelector('.ol');

if(localStorage.getItem("todo") == null){
    localStorage.setItem('todo', '[]')
}
let arr = JSON.parse(localStorage.getItem("todo"));

let htmlPush = '<ol id="ol">';
render()


go.addEventListener('click', pushItem)
clean.addEventListener('click', cleanAll)

function pushItem(){
    if(text.value != ''){
        arr.push(text.value);
        text.value = '';
    }

    let serialArr = JSON.stringify(arr);
    localStorage.setItem('todo', serialArr);
    let returnArr = JSON.parse(localStorage.getItem("todo"));

    htmlPush = '<ol id="ol">';
    render()

// localStorage.clear()
}

function render(){
    for(let i =0; i<arr.length; i++){
        htmlPush +='<li>'+arr[i]+'<button onclick="removeItem('+[i]+')">x</button></li>';
    }
    htmlPush += '</ol>';
    ul.innerHTML=htmlPush;
}

function removeItem(el){
    arr.splice(el,1)
    let serialArr = JSON.stringify(arr);
    localStorage.setItem('todo', serialArr);
    let returnArr = JSON.parse(localStorage.getItem("todo"));
    htmlPush = '<ol id="ol">';
    render()
}
