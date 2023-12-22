function toggleContent(e) {
    var Content = document.querySelector(`#${e}`);

    if (Content.style.maxHeight) {
        Content.style.maxHeight = null;
        Content.style.overflow = 'hidden';

    } else {
        Content.style.maxHeight = Content.scrollHeight + "px";
        Content.style.overflow = 'initial';
    }
}