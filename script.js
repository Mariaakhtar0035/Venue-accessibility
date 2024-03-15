// Define your venues data
var venues = [
    { name: "Scotiabank Arena", htmlFilePath: "Scotiabank.html" },
    { name: "Venue 2", htmlFilePath: "ontario.html" },
    // Add more venues as needed
];

// Function to search for a venue
function searchVenue() {
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var venueFound = false; // Flag to track if the venue is found

    // Loop through the list of venues
    for (var i = 0; i < venues.length; i++) {
        var venue = venues[i];
        if (venue.name.toLowerCase().includes(searchValue)) {

            // Redirect to the corresponding HTML file for the venue
            window.location.href = venue.htmlFilePath;
            venueFound = true; // Set the flag to true
            return; // Exit the loop after the first match is found
        }
    }

    // If no match is found, redirect to a page indicating the venue doesn't exist
    if (!venueFound) {
        window.location.href = "venue_not_found.html";
    }
}

$(function() {
    var venues = [
        "Scotiabank Arena",
        "Rogers Center",
        "FirstOntario Center",
        "FirstOntario Concert Hall",
        "The Studio Hamilton",
        "Budweiser Gardens",
        "London Music Hall",
        "Paramount Fine Foods Center",
        "Budweiser Stage",
        "Danforth Music Hall",
        "Massey Hall",
        "Meridian Hall",
        "The Axis Club",
        "Roy Thomson Hall",
        // Add more venue names as needed
    ];

    $("#searchInput").autocomplete({
        source: venues
    });
});

$(document).ready(function() {
    var iconSection = $('#iconSection');
    var iconSectionVisible = false;

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Adjust 100 to the scroll position where you want the elements to appear
            if (!iconSectionVisible) {
                iconSection.fadeIn();
                iconSectionVisible = true;
            }
        } else {
            if (iconSectionVisible) {
                iconSection.fadeOut();
                iconSectionVisible = false;
            }
        }
    });
});


