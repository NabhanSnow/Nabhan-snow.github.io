
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if(toggle) toggle.addEventListener('click',()=>menu.classList.toggle('open'));

document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',()=>menu && menu.classList.remove('open'));
});

document.querySelectorAll('form[data-contact]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Anfrage – Nabhan Snow Clean Service');
    const body = encodeURIComponent(
      `Name: ${data.get('name')||''}\nE-Mail: ${data.get('email')||''}\nTelefon: ${data.get('phone')||''}\nLeistung: ${data.get('service')||''}\n\nNachricht:\n${data.get('message')||''}`
    );
    window.location.href = `mailto:info@nabhan-snow.de?subject=${subject}&body=${body}`;
  });
});
