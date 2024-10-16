const commentForm = document.querySelector('.comment-form');
const commentsDiv = document.querySelector('#comments')




commentForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('#comment-input');

    if(input.value == '') return

    const newId = crypto.randomUUID()

   //commentsDiv.innerHTML += `
   //<div id="${newId}" class="comment">
   // <p>${input.value}</p>
   // </div>`

   

   // document.querySelector('#' + newId).addEventListener('click', e => {
//  e.currentTarget.classList.add('active')


  // })
 commentsDiv.insertAdjacentHTML("beforeend", `
   <div id="${newId}" class="comment">
   <p>${input.value}</p>
    </div>`

 )

  input.value = ''
})



