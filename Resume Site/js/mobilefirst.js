 // Wait for the DOM to be fully loaded before running the script
 document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle button and the main navigation element
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Add click event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'show' class on the main navigation to show/hide the menu
        mainNav.classList.toggle('show');
    });

// Sample menu item structure
// const sampleMenuItem = {
//     name: "Grilled Salmon",
//     description: "Fresh Atlantic salmon, grilled to perfection and served with a lemon butter sauce.",
//     price: "$24.99",
//     image: "../images/restaurant/menu-item-1.jpg"
// };

// TODO: Create an array of menu items for your restaurant
// Example: const menuItems = [sampleMenuItem, { name: "Dish 2", description: "Description", price: "$20.00", image: "../images/restaurant/menu-item-2.jpg" }, ...];

const menuItems = [
    // Add your menu items here following the sample structure
];

// Function to handle responsive image updates based on screen size
function handleResponsiveImages() {
    /*
    TODO: Implement logic for responsive images based on screen size.
    The idea here is to adjust image properties to fit the user's device.
    
    Steps to implement:
    1. First, determine the current screen width using JavaScript. You can use `window.innerWidth`.
       This will help you determine if the screen is a mobile, tablet, or desktop size.
       Example: `const screenWidth = window.innerWidth;`
    
    2. Loop through all the images that you need to adjust. To do this, you can select the images by their class or ID.
       Example: `const images = document.querySelectorAll(".menu-item img");`
    
    3. Apply different styles or replace the image source based on the screen size.
       You can use conditions to decide which image size to use or how to adjust the CSS properties for each image.
       Example:
       ```js
       if (screenWidth <= 600) {
           // Mobile - Change images to smaller resolution
           images.forEach((img) => {
               img.style.width = "100px";
               img.style.height = "100px";
           });
       } else if (screenWidth <= 900) {
           // Tablet - Medium resolution
           images.forEach((img) => {
               img.style.width = "120px";
               img.style.height = "120px";
           });
       } else {
           // Desktop - Higher resolution
           images.forEach((img) => {
               img.style.width = "150px";
               img.style.height = "150px";
           });
       }
       ```
    4. To ensure responsiveness, add an event listener for the window resize event.
       This way, the images will automatically adjust when the user changes the screen size.
       Example: `window.addEventListener("resize", handleResponsiveImages);`
    */
}

// Function to create menu categories and populate the menu section dynamically
function createMenuCategories() {
    /*
    TODO: Dynamically generate the menu categories and populate them with menu items.
    
    Steps to implement:
    1. Get a reference to the container where the menu items will be placed.
       Example: `const menuContainer = document.getElementById("menu-categories");`
    
    2. Loop through the `menuItems` array you created earlier.
       For each item in the array, create a new DOM element to represent the item and add it to the menu container.
       Example:
       ```js
       menuItems.forEach((item) => {
           // Create a new div for the menu item
           const menuItemDiv = document.createElement("div");
           menuItemDiv.classList.add("menu-item");
           
           // Add image element for the item
           const img = document.createElement("img");
           img.src = item.image;
           img.alt = item.name;
           img.loading = "lazy";
           menuItemDiv.appendChild(img);
           
           // Create a div for the item details
           const detailsDiv = document.createElement("div");
           detailsDiv.classList.add("menu-item-details");
           
           // Add item name
           const nameElement = document.createElement("h3");
           nameElement.classList.add("menu-item-name");
           nameElement.textContent = item.name;
           detailsDiv.appendChild(nameElement);
           
           // Add item description
           const descriptionElement = document.createElement("p");
           descriptionElement.classList.add("menu-item-description");
           descriptionElement.textContent = item.description;
           detailsDiv.appendChild(descriptionElement);
           
           // Add item price
           const priceElement = document.createElement("p");
           priceElement.classList.add("menu-item-price");
           priceElement.textContent = item.price;
           detailsDiv.appendChild(priceElement);
           
           // Append details to the menu item div
           menuItemDiv.appendChild(detailsDiv);
           
           // Append the menu item to the container
           menuContainer.appendChild(menuItemDiv);
       });
       ```
    3. Ensure that the menu is responsive by making use of appropriate CSS classes (already provided in your CSS file).
       The JavaScript will help dynamically add the items, while the CSS will handle their presentation across different screen sizes.
    */
}

// Call the functions to initialize the menu and responsive behavior
window.addEventListener("load", () => {
    createMenuCategories();
    handleResponsiveImages();
});

// Ensure responsiveness when resizing the window
window.addEventListener("resize", handleResponsiveImages);




 })