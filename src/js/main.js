const settings = {
    jsEnabledClass: 'js-enabled',
    bodyNightModClass: 'body--night-mode',
    tumblerSelector: '.tumbler',
    buttonNightModClass: 'tumbler--night-mode',
    postSelector: '.post',
    postNightClass: 'post--night-mode',
}
document.documentElement.classList.add(settings.jsEnabledClass);
const buttonNightMod = document.querySelector('.tumbler__wrapper');
buttonNightMod.addEventListener('click',()=> {
    document.body.classList.toggle(settings.bodyNightModClass);
    document.querySelector(settings.tumblerSelector).classList.toggle(settings.buttonNightModClass);
    for (const post of document.querySelectorAll(settings.postSelector)) {
        post.toggle(settings.postNightClass);
    }
})