document.getElementById("year").innerHTML = getCurrentYear();

/**
 * @returns string: the current year
 */
function getCurrentYear() {
  let date = new Date();
  let year = date.getFullYear();
  return year;
}

/**
 * If the fields are filled, the spinner will activate
 */
document.getElementById('myForm').addEventListener('submit', function(event) {

  let email = document.getElementById('email').value;
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;

  if (email && name && message) {
    document.getElementById('sendEmail').innerHTML = `
      <div class="spinner-border small-spinner text-primary-emphasis" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;
  }
});

/**
 * creates modals
 */
$(document).ready(function(){
  $(".card").click(function(){
      let cardId = $(this).attr('id');
      $("#" + cardId + "Modal").modal('show');
  });
});