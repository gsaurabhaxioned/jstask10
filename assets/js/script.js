let textbox = document.querySelector('#enter-choice'),
    choice_tags = document.querySelector('#choice-tags'),
    text_pattern = /,$/;


    textbox.addEventListener('keypress',function(){
   
    let text = textbox.value;
    

    if(text.match(text_pattern)){
    let tag=document.createElement('span');
    choice_tags.appendChild(tag);
    tag.setAttribute('class','span-tag');
    let span_tag = document.querySelector('.span-tag');
        
        span_tag.innerText = text;
       
}    
})













