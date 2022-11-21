$(document).ready(function(){
    let btnGetData = document.getElementById('getData');
    const getbutton = () => {
        fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .then(res => res.json())
            .then(data => {
                let divId = document.createElement('div');
                divId.setAttribute("id", "dane-programisty");

                divId.innerText = `dane-programisty: ${data.imie} ${data.nazwisko} ${data.zawod} ${data.firma}`;
                document.body.appendChild(divId);
            })
    }
    btnGetData.addEventListener('click', getbutton);
});
    


