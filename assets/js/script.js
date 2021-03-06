let textbox = document.querySelector('#enter-choice'),
    choice_tags = document.querySelector('#choice-tags'),
    text = "";
    i = 0;


textbox.addEventListener('keydown', function (e) {

    text = textbox.value;

    if (text == "") {
        choice_tags.innerHTML = "";
    } else {
        let text_array = text.split(',');
        if ((text.length === 1 || e.keyCode === 188) && e.keyCode != 32 && e.keyCode != 8) {
            if (text[0] != ",") {
                let tag = document.createElement('span');
                choice_tags.appendChild(tag);
                tag.setAttribute('class', 'span-tag');
            } else {
                textbox.value = "";
            }
        
    }
        let span_tag = document.querySelectorAll('.span-tag');

        text_array.forEach((i, index) => {
            span_tag[index].innerText = text_array[index];
        });

        span_tag.forEach(i => {
            if (i.innerText == "") {
                i.style.display = "none";
            } else {
                i.style.display = "inline-block";
            }
        })
    }

});

textbox.addEventListener('blur', function () {
    textbox.style.border = "none";
    textbox.style.outline = "none";
})
textbox.addEventListener('focus', function () {
    textbox.style.border = "2px solid #000";
    textbox.style.outline = "1px solid #fff";
})

function colorchange() {
    let span_tag = document.querySelectorAll('.span-tag');
    
    span_tag.forEach(i => {
        i.style.backgroundColor = "#FFA500";
    })

    if (i == span_tag.length - 1) {
        i = 0;
    } else {
        i++;
    }
    
    
    span_tag[i].style.backgroundColor = "#273C75";
    
    textbox.value="";
}


textbox.addEventListener('keypress', function (e) {

    if (e.keyCode === 13) {
        
    if(textbox.value==""){
        e.preventDefault();
    }else{
        e.preventDefault();
        let form = document.querySelector(".form"),
            changingcolor = setInterval('colorchange()', 100);
           
        // form.reset();
        // textbox.value="";
        
        setTimeout(() => {
            clearInterval(changingcolor);
        }, 2000);
        this.addEventListener('keydown',function(){
            clearInterval(changingcolor);
        });
    }

}

})

