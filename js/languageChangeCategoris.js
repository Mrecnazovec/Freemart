let select = document.querySelector("select");
let allLang = ['ru', 'uz']

select.addEventListener("change", changeURLLanguage) 
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload()
}
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload()
    }
    select.value = hash;
    document.querySelector('.main').innerHTML = langArr['main'][hash]
    document.querySelector('.main').href = document.querySelector('.main').href+"#"+hash
    document.querySelector('.mainMob').innerHTML = langArr['main'][hash]
    document.querySelector('.mainMob').href = document.querySelector('.mainMob').href+"#"+hash



    document.querySelector('.categoris').innerHTML = langArr['categoris'][hash]
    document.querySelector('.categoris').href = document.querySelector('.categoris').href+"#"+hash
    document.querySelector('.categorisMob').innerHTML = langArr['categoris'][hash]
    document.querySelector('.categorisMob').href = document.querySelector('.categorisMob').href+"#"+hash



    document.querySelector('.contact').innerHTML = langArr['contact'][hash]
    document.querySelector('.contact').href = document.querySelector('.contact').href+"#"+hash
    document.querySelector('.contactMob').innerHTML = langArr['contact'][hash]
    document.querySelector('.contactMob').href = document.querySelector('.contactMob').href+"#"+hash




    document.querySelector('.icon_box_title').innerHTML = langArr['icon_box_title'][hash]
    document.querySelector('.icon_box_title_two').innerHTML = langArr['icon_box_title_two'][hash]
    document.querySelector('.icon_box_title_three').innerHTML = langArr['icon_box_title_three'][hash]
    document.querySelector('.home_title_text').innerHTML = langArr['home_title_text'][hash]
    document.querySelector('.home_text_text').innerHTML = langArr['home_text_text'][hash]
    document.querySelector('.sorting_text').innerHTML = langArr['sorting_text'][hash]
    document.querySelector('.sortNone').innerHTML = langArr['sortNone'][hash]
    document.querySelector('.sortPrice').innerHTML = langArr['sortPrice'][hash]
    document.querySelector('.results').innerHTML = langArr['results'][hash]

    document.querySelector('.nav_logo_go').href = document.querySelector('.nav_logo_go').href+"#"+hash
    document.querySelector('.footer_logo_go').href = document.querySelector('.footer_logo_go').href+"#"+hash
}
changeLanguage()