document.addEventListener("DOMContentLoaded", function() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyAkgf29LAnzg_qvBiy1GOxV6V8fi2q-vjK52K0_g3KtVy5XIvi8LWlMTgof6zpTSG9/exec";
    const form = document.forms['google-sheet'];

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success!', result);
        alert('Thank you for subscribing to our newsletter!');
      })
      .catch(error => console.error('Error!', error.message));
      form.reset();
    });
  });