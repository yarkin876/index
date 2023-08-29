let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit',formHandler);

function formHandler(event) {
    event.preventDefault();
    const PAT_NAME = document.querySelector("#pat_name");
    const SCORE = document.querySelector("#score");
    const PAT_ID = document.querySelector("#pat_id");
    addItem(PAT_NAME.value, SCORE.value,PAT_ID.value);
    
}

let pat_list1DOM = document.querySelector('#pat_list1');

    const addItem = ( pat_Id,pat_Name, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = ` ${pat_Id} ${pat_Name}  ${score} ` ;
    liDOM.classList.add('list-group-item', 'd-flex' ,'justify-content-between', 'align-items-center');
    pat_list1DOM.append(liDOM);
    };



