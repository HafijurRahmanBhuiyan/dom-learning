document.getElementById('btn-cmnt')
    .addEventListener('click', function(){
        const textArea = document.getElementById('cmnt-txt-area');
        let text = textArea.value;
        const newComment = document.createElement('p');
        newComment.innerText = text;
        const newParagraph = document.getElementById('comment-container');
        newParagraph.appendChild(newComment);
        // newComment.setAttribute('class','comment');  //using setAttribute set the class attribute.
        newComment.classList.add('comment'); //Recommended because it's not affecting other classes.
        textArea.value = '';
        
     

})