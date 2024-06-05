$(document).ready(function() {
    $('#ratingForm').on('submit', function(event) {
        event.preventDefault();
        
        // Capture the values from the inputs
        let title = $('#title').val();
        let rating = $('#rating').val();
        
        // Append the title and rating to the DOM
        $('#displaySection').append(`
            <div class="entry">
                <span>Title: ${title}, Rating: ${rating}</span>
                <button class="removeBtn">Remove</button>
            </div>
        `);
        
        // Clear the form inputs
        $('#title').val('');
        $('#rating').val('');
    });

    // Delegate the click event to dynamically added remove buttons
    $('#displaySection').on('click', '.removeBtn', function() {
        $(this).closest('.entry').remove();
    });
});
