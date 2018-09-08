$(document).ready(function() {

  var apiRoot = 'http://localhost:8080/';
  const $tasksContainer = $('[data-tasks-container]');
	
  function handleTaskSubmitRequest(event) {
    event.preventDefault();

    var numbers = $(this).find('[name="numbers"]').val();
    var order = $(this).find('[name="order"]').val();

    var requestUrl = apiRoot + 'numbers/sort-command';

    $.ajax({
      url: requestUrl,
      method: 'POST',
      processData: false,
      contentType: "application/json; charset=utf-8",
      dataType: 'text',
      data: JSON.stringify({
        numbers: numbers,
        order: order
      }),
      success: function(text) {
        $tasksContainer.text(text).appendTo($tasksContainer);
        }
    });
  }

  $('[data-get-form]').on('submit', handleTaskSubmitRequest);

});
