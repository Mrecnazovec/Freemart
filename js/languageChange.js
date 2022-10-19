let select = document.querySelector("select");
let allLang = ['ru', 'uz']

select.addEventListener("change", changeURLLanguage) 
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload()
}

// window.addEventListener('change',changeLanguage)
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1)
    hashTwo = hash
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





    document.querySelector('.home_slider_title').innerHTML = langArr['home_slider_title'][hash]
    document.querySelector('.home_slider_subtitle').innerHTML = langArr['home_slider_subtitle'][hash]





    document.querySelector('.aloqa').innerHTML = langArr['aloqa'][hash]
    document.querySelector('.aloqa').href = document.querySelector('.aloqa').href+"#"+hash
    document.querySelector('.aloqaTwo').innerHTML = langArr['aloqa'][hash]
    document.querySelector('.aloqaTwo').href = document.querySelector('.aloqaTwo').href+"#"+hash






    document.querySelector('.home_slider_title_two').innerHTML = langArr['home_slider_title_two'][hash]
    document.querySelector('.home_slider_subtitle_two').innerHTML = langArr['home_slider_subtitle_two'][hash]
    document.querySelector('.avds_title').innerHTML = langArr['avds_title'][hash]
    document.querySelector('.avds_title_two').innerHTML = langArr['avds_title_two'][hash]





    document.querySelector('.avds_more').innerHTML = langArr['avds_more'][hash]
    document.querySelector('.avds_more_two').innerHTML = langArr['avds_more'][hash]
    document.querySelector('.avds_more').href = document.querySelector('.avds_more').href+"#"+hash
    document.querySelector('.avds_more_two').href = document.querySelector('.avds_more_two').href+"#"+hash







    document.querySelector('.icon_box_title').innerHTML = langArr['icon_box_title'][hash]
    document.querySelector('.icon_box_title_two').innerHTML = langArr['icon_box_title_two'][hash]
    document.querySelector('.icon_box_title_three').innerHTML = langArr['icon_box_title_three'][hash]

    document.querySelector('.nav_logo_go').href = document.querySelector('.nav_logo_go').href+"#"+hash
    document.querySelector('.footer_logo_go').href = document.querySelector('.footer_logo_go').href+"#"+hash
}
changeLanguage()