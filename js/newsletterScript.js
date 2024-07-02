document.addEventListener("DOMContentLoaded", function() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyAkgf29LAnzg_qvBiy1GOxV6V8fi2q-vjK52K0_g3KtVy5XIvi8LWlMTgof6zpTSG9/exec";
  const form = document.forms['google-sheet'];
  const alertContainer = document.getElementById('alert-container');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success!', result);
      showAlert('Thank you for subscribing to our newsletter!', 'alert-secondary');
    })
    .catch(error => {
      console.error('Error!', error.message);
      showAlert('An error occurred. Please try again.', 'alert-danger');
    });
    form.reset();
  });

  function showAlert(message, alertClass) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${alertClass}`;
    alertDiv.role = 'alert';
    alertDiv.innerText = message;

    alertContainer.appendChild(alertDiv);

    // Remove the alert after 5 seconds
    setTimeout(() => {
      alertDiv.remove();
    }, 4000);
  }
});