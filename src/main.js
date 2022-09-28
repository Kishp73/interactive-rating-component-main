
let state_container_thank = document.getElementById('card_container_thank');
let state_card_container_rating = document.getElementById('card_container_rating');

let buttoms = document.getElementsByClassName('style_rating');
let click_buttom_rating = false;
let buttom_before = null;
let used_time_buttoms = 0;


for (let i = 0; i<5;i++){
    buttoms[i].addEventListener('click',()=>{
        if (used_time_buttoms > 0){
            //reset state before buttom
            buttom_before.disabled = false;
        }

        used_time_buttoms++;

        //discard the alert submit
        click_buttom_rating = true;

        //style disable buttom
        buttom_before = buttoms[i];
        buttoms[i].disabled = true;

        //Get element rating selected and set value
        let show_value = document.getElementById('rating_selected');
        show_value.innerHTML = buttoms[i].value;

        //allow use submit buttom when have 
        let submit = document.getElementById('submit');
        submit.addEventListener('click',()=>{
            state_container_thank.style.display = 'flex';
            state_card_container_rating.style.display = 'none';
            });

    });
}

// alert in case not push buttom submit without selected a rating
submit.addEventListener('click',()=>{
    if (click_buttom_rating == false){
        alert('Please select a rating')
    }
});




