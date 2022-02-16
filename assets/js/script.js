let textbox = document.querySelector('#enter-choice'),
    choice_tags = document.querySelector('#choice-tags'),
    text_pattern = /,$/,
    text = "";


    textbox.addEventListener('keyup',function(e){
       
     text = textbox.value;
     let text_array=text.split(',');
     if(text.length == 1 || e.keyCode==188){
         if(e.keyCode == 32){
        
     }else{
        let tag=document.createElement('span');
             choice_tags.appendChild(tag);
             tag.setAttribute('class','span-tag');
     }
    }
     let span_tag = document.querySelectorAll('.span-tag');

     text_array.forEach((i,index)=>{
         span_tag[index].innerText = text_array[index];
         if(text_array[index]==""){
             span_tag[index].style.display = "none";
         }else{
            span_tag[index].style.display = "inline-block";
         }
        
        });
    
    });
    //e.keyCode==188
       

    //  text_array.forEach(i=>{
    //     let tag=document.createElement('span');
    //     choice_tags.appendChild(tag);
    //     tag.setAttribute('class','span-tag');
    //  });
     







    // if(text.match(text_pattern)){
    // let tag=document.createElement('span');
    // choice_tags.appendChild(tag);
    // tag.setAttribute('class','span-tag');
    // let span_tag = document.querySelectorAll('.span-tag'),
    //     span_length = span_tag.length-1;
    //     span_tag[span_length].innerText = text;
        // if(e.keyCode === 188){
        //     console.log("comma");
        //     text = "";
        // }
       
// }    
// })













