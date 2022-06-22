const toggle = document.querySelector(`#toggle`);
toggle.addEventListener('click', function () {
  const body = document.querySelector(`body`);
  if (toggle.checked) {
    body.style.backgroundColor = `#000`;
    body.style.color = `#fff`;
}
  else{
      body.style.backgroundColor = `#fff`;
      body.style.color = `#000`;
    }
});
