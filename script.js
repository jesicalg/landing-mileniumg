let select = document.querySelector('form select');
formSelectBehaviour();
select.onchange = () =>{
    console.log('prueba');
    formSelectBehaviour();
}
function formSelectBehaviour () {
    if(select.value == -1)
        select.classList.add('placeholder');
    else
        select.classList.remove('placeholder');

}