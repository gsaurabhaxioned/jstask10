let textbox = document.querySelector('#enter-choice'),
    choice_tags = document.querySelector('#choice-tags'),
    text = "";

textbox.addEventListener('keyup', function (e) {

    text = textbox.value;
    if (text == "") {
        choice_tags.innerHTML = "";
    }else{
    let text_array = text.split(',');
    if ((text.length == 1 || e.keyCode == 188) && e.keyCode != 32 && e.keyCode != 8) {

        let tag = document.createElement('span');
        choice_tags.appendChild(tag);
        tag.setAttribute('class', 'span-tag');
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
