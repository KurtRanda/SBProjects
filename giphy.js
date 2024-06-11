// Set the code to run after document is loaded
$(document).ready(function() {
    $('#searchButton').click(function() {
    //   Get search query and the API and Key
        const query = $('#searchInput').val(); 
      const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
      const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1`;

//   Checks search query for being empty
      if (query.trim() === "") {
        $('#error').text('Please enter a search term.');
        return;
      }
//   AXIOS request to Giphy API
      axios.get(url)
        .then(function(response) {
          const gifs = response.data.data;
          $('#error').empty();
          if (gifs.length === 0) {
            $('#error').text('No GIFs found for this search term.');
          } else {
            const imgUrl = gifs[0].images.fixed_height.url;
            $('#giphyResults').append(`<img src="${imgUrl}" class="giphyImage">`);
          }
        })
        .catch(function(error) {
          $('#error').text('Error fetching GIFs. Please try again.');
          console.error('Error fetching gifs:', error);
        });

            // Clear the search input field after submission
    $('#searchInput').val("");
    });
//   keypress event for search
    $('#searchInput').keypress(function(event) {
      if (event.keyCode === 13) {
        $('#searchButton').click();
      }
    });
//   Remove all GIFs from page
    $('#removeButton').click(function() {
      $('#giphyResults').empty();
    });
  });
  
  