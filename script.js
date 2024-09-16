
console.log("testing");
let form = document.getElementById('form');
let msg = document.getElementById('msg');
let input = document.getElementById('input');
let posts = document.getElementById('posts')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (input.value === " "){
        msg.innerHTML = "Post cannot be Empty"
    }
    acceptData();

})
let forValidation = ()=>{
    
}

let data ={}


let acceptData = ()=>{
    data["text"]=input.value 
    if(input.value)
    createPost();

}

let createPost = ()=>{
    posts.innerHTML +=`
    <div>
        ${data.text}<span class = "options">
            <i class= "fas fs-edit"></i>
            <i class="fas fa-trash-alt" onclick="deletePost(this)">  </i>
        </span>
            </div>`
}
let deletePost = (e)=>{
    e.parentElement.prenetElement.remove()
}