console.log('added');
let btn = document.querySelector('.calc');

btn.addEventListener('click', function(){
    let leftInput = document.getElementById('left').value;
    let rightInput = document.getElementById('right').value;


    let bar = document.querySelector('.lever');

    if(leftInput>rightInput){
        bar.classList.add('leftRotate')
    }
    else if(leftInput<rightInput){
        bar.classList.add('rightRotate')
    }
})