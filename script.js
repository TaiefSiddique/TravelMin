// Function to handle search form submission
function handleSearchFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the search query
    const searchInput = document.querySelector("#search-input");
    const searchQuery = searchInput.value.trim();
  
    // Perform search functionality
    if (searchQuery !== "") {
      // Replace this with your actual search logic
      console.log("Performing search for: ", searchQuery);
    }
  }
  
  // Function to handle destination card click
  function handleDestinationCardClick(event) {
    // Replace this with your actual handling logic for destination card click
    const card = event.currentTarget;
    const destinationName = card.querySelector("h4").textContent;
    console.log("Clicked on destination:", destinationName);
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", function () {
    // Search form submission
    const searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", handleSearchFormSubmit);
  
    // Destination card click
    const destinationCards = document.querySelectorAll(".card");
    destinationCards.forEach((card) => {
      card.addEventListener("click", handleDestinationCardClick);
    });
  });
  