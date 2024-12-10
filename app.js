const formEl = document.querySelector(".form")
const inputName = document.querySelector(".form__name")
const inputOccupation = document.querySelector(".form__occupation")
const inputUniversity = document.querySelector(".form__university")
const wrapperEl = document.querySelector(".wrapper");
const openModal = document.querySelector(".open-modal");
const boxModel = document.querySelector(".modal__box");
const closeModal = document.querySelector(".close");

let TODOS = JSON.parse(localStorage.getItem("todos")) || []
console.log(TODOS)

openModal.addEventListener("click", ()=>{
    boxModel.classList.remove("hidden")
})

closeModal.addEventListener("click", ()=>{
    boxModel.classList.add("hidden")
})

formEl.addEventListener("submit",(even)=>{
    even.preventDefault();
    let newTodo = {
        name:inputName.value,
        ocupation: inputOccupation.value,
        university: inputUniversity.value,
    }
    TODOS.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(TODOS))
    
    createTodo([newTodo]);
    inputName.value = ""
    inputOccupation.value = ""
    inputUniversity.value = ""
});

function createTodo(todos){
    todos.forEach((todo)=>{
        const boxEl = document.createElement("div");
        boxEl.innerHTML = `
         <div class="box">
           <button><i class="fa-solid fa-xmark menu"></i></button>
             <img class="img" src="./assets/images.png" alt="">
             <div class="text">
                <h2>${todo.name}</h2>
                <h3>${todo.ocupation}</h3>
                <h4>${todo.university}</h4>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-dribbble"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
            <button class="btn">Contact</button>
          </div>
         `
        wrapperEl.appendChild(boxEl)
    })
}

window.addEventListener("load", ()=>{
    createTodo(TODOS)
})