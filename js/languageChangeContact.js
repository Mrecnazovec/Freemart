let select = document.querySelector("select");
let allLang = ["ru", "uz"];

select.addEventListener("change", changeURLLanguage);
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
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







  document.querySelector(".breadcr_main").innerHTML =
    langArr["breadcr_main"][hash];
  document.querySelector('.breadcr_main').href = document.querySelector('.breadcr_main').href+"#"+hash





  document.querySelector(".breadcr_contact").innerHTML =
    langArr["breadcr_contact"][hash];
  document.querySelector(".section_title").innerHTML =
    langArr["section_title"][hash];
  document.querySelector(".contact_name").innerHTML =
    langArr["contact_name"][hash];
  document.querySelector(".contact_last_name").innerHTML =
    langArr["contact_last_name"][hash];
  document.querySelector(".contact_company").innerHTML =
    langArr["contact_company"][hash];
  // document.querySelector(".contact_textarea_text").innerHTML =
  //   langArr["contact_textarea_text"][hash];
  document.querySelector(".sending").innerHTML = langArr["sending"][hash];
  document.querySelector(".telephone_test").innerHTML =
    langArr["telephone_test"][hash];
  document.querySelector(".telephone_test-two").innerHTML =
    langArr["telephone_test"][hash];
  document.querySelector(".telephone_test-three").innerHTML =
    langArr["telephone_test"][hash];
  document.querySelector(".email_test").innerHTML = langArr["email_test"][hash];
  document.querySelector(".email_test_two").innerHTML =
    langArr["email_test"][hash];
  document.querySelector(".email_test_three").innerHTML =
    langArr["email_test"][hash];
    document.querySelector(".contact_info_title").innerHTML =
    langArr["contact_info_title"][hash];
    document.querySelector(".contact_info_title_two").innerHTML =
    langArr["contact_info_title_two"][hash];
    document.querySelector(".contact_info_title_three").innerHTML =
    langArr["contact_info_title_three"][hash];


    document.querySelector('.nav_logo_go').href = document.querySelector('.nav_logo_go').href+"#"+hash
    document.querySelector('.footer_logo_go').href = document.querySelector('.footer_logo_go').href+"#"+hash
}
changeLanguage();
