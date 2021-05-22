document.querySelector('.tugma').addEventListener('click', function(){
    var ekran = document.querySelector('.ekran'),
	tugadi = 33;
    
    ekran.value = parseInt(ekran.value) + 1;
})

document.querySelector('.button-2').addEventListener('click', function(){
    document.querySelector('.ekran').value = 0;
})
