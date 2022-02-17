let textbox = document.querySelector('#enter-choice'),
    choice_tags = document.querySelector('#choice-tags'),
    text = "";


textbox.addEventListener('keydown', function (e) {

    text = textbox.value;

    if (text == "") {
        choice_tags.innerHTML = "";
    } else {
        let text_array = text.split(',');
        if ((text.length == 1 || e.keyCode == 188) && e.keyCode != 32 && e.keyCode != 8) {
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