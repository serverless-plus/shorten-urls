$(document).ready(function() {
  const button = $('#button');
  const input = $('#url');
  const result = $('#result');

  button.on('click', () => {
    const url = input.val();
    const domain = $('input[type=radio]:checked').val();
    if (!url) {
      return;
    }
    $.ajax({
      method: 'POST',
      url: '/api/short',
      dataType: 'json',
      data: {
        longUrl: url,
        baseUrl: domain,
      },
    })
      .done((res) => {
        if (res.code === 0) {
          result.html(`<a href="${res.data.url}" target="_blank">${res.data.url}</a>`);
        } else {
          result.html(`<span class="error">${res.error.message}</span>`);
        }
      })
      .fail((res) => {
        const error = JSON.parse(res.responseText).error;
        result.html(`<span class="error">${error.message}</span>`);
      });
  });
});
