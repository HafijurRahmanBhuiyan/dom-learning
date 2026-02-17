const changeTitle = document.getElementById('btn-change-title');
changeTitle.addEventListener('click',function(){
    const pageTitle  = document.getElementById('page-title');
    pageTitle.innerText = 'Hi Sohan';
})


document.getElementById('btn-update')
    .addEventListener('click', updateName);

function updateName(){
    const nameText = document.getElementById('name-text');
    const name = nameText.value;
    const nameTitle = document.getElementById('name-title');
    nameTitle.innerText = name;
}    