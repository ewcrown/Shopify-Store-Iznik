const variantWrap = document.querySelector(".variant-input-wrap");

const isUnstitched = (e) => {
  if (e.target.tagName == "INPUT" && e.target.type === "radio") {
    if (e.target.value == "Unstitched") {
      const app_styleVariant = document.querySelector(
        '.iznit-product-app-block input[name="properties[Style]"]:checked'
      );
      if (app_styleVariant) app_styleVariant.checked = false;

      // Hide the note when Unstitched is clicked
      document.querySelectorAll(".st-note").forEach((e) => {
        e.textContent = ""; // Clear the note content
      });

      // Remove the note from localStorage when Unstitched is clicked
      localStorage.removeItem('stitchedOrderNote');
    }
  }
};

if (variantWrap) {
  
  // Add event listener for click event to handle 'Unstitched' selection
  variantWrap.addEventListener("click", isUnstitched);

  let unStitchedInput = variantWrap.querySelector('input[value="Unstitched"]');

  // If 'Unstitched' is checked, uncheck any selected style variants
  if (unStitchedInput && unStitchedInput.checked) {
    const checkStyle = setInterval(() => {
      const app_styleVariant = document.querySelector(
        '.iznit-product-app-block input[name="properties[Style]"]:checked'
      );
      if (app_styleVariant) {
        app_styleVariant.checked = false;
        clearInterval(checkStyle); // Stop the interval when a checked style is found and unchecked
      }
    }, 500);
  }

  const stitchedInput = variantWrap.querySelector('input[value="Stitched"]');

  // Select size options for 'Stitched'
  const stitchedSizes = document.querySelectorAll(".radio-size-options input");

  if (stitchedInput && stitchedInput.checked) {
    stitchedSizes[0].checked = true; // Automatically check the first size option
  }
}

// Show note only for "Stitched" click
if (document.querySelector("#ai-Stitched-st")) {
  document.querySelector("#ai-Stitched-st").addEventListener("click", () => {
    const orderNotes = document.getElementsByClassName("order-note");

    const note = '<b class="note-variant"> Note: Stitched orders require up to 5 weeks for dispatch.</b>';

    // Save the note in localStorage
    localStorage.setItem('stitchedOrderNote', note);

    // Update the note in the DOM
    document.querySelectorAll(".st-note").forEach((e) => {
      e.innerHTML = localStorage.getItem('stitchedOrderNote');
    });

    // Hide elements with classes 'hdr-custom-size-opt' and '
    // -item-property__field'
    document.querySelectorAll(".hdr-custom-size-opt, .line-item-property__field").forEach((el) => {
      el.style.display = "none !important";
    });
  });
}


// Check localStorage for the note on page load and display it if available
document.addEventListener('DOMContentLoaded', () => {
  const storedNote = localStorage.getItem('stitchedOrderNote');
  if (storedNote) {
    // Display the stored note
    document.querySelectorAll(".st-note").forEach((e) => {
      e.innerHTML = storedNote;
    });
  }
});

// Hide note on "Unstitched" click
// if (document.querySelector("#ai-Unstitched-st")) {
//   document.querySelector("#ai-Unstitched-st").addEventListener("click", () => {
//     const orderNotes = document.getElementsByClassName("order-note");

//     for (let i = 0; i < orderNotes.length; i++) {
//       orderNotes[i].classList.remove("display-none");
//     }

//     document.querySelectorAll(".st-note").forEach((e) => {
//       e.textContent = ""; // Clear the note when Unstitched is clicked
//     });

//     // Remove the note from localStorage when Unstitched is clicked
//     localStorage.removeItem('stitchedOrderNote');
//   });
// };


document.addEventListener("DOMContentLoaded", function() {
  // Get the "Stitched" and "Unstitched" radio buttons
  const stitchedRadio = document.querySelector("#ProductSelect-template--18447529083106__main-8748198068450-option-type-Stitched");
  const unstitchedRadio = document.querySelector("#ProductSelect-template--18447529083106__main-8748198068450-option-type-Unstitched");

  // Get all the order-note elements
  const orderNotes = document.querySelectorAll(".order-note");

  // Function to show the order note
  function showOrderNote() {
    orderNotes.forEach(function(note) {
      note.style.display = "block";  // Show the order-note elements
    });
  }

  // Function to hide the order note
  function hideOrderNote() {
    orderNotes.forEach(function(note) {
      note.style.display = "none";  // Hide the order-note elements
    });
  }

  // Initially hide the order-note by default
  hideOrderNote();

  // When "Stitched" is selected, show the order note
  if (stitchedRadio) {
    stitchedRadio.addEventListener("change", function() {
      if (stitchedRadio?.checked) {
        showOrderNote();
      }
    });
  }

  // When "Unstitched" is selected, hide the order note
  if (unstitchedRadio) {
    unstitchedRadio.addEventListener("change", function() {
      if (unstitchedRadio?.checked) {
        hideOrderNote();
      }
    });
  }

  // If the "Stitched" option is already checked when the page loads, show the order note
  if (stitchedRadio?.checked) {
    showOrderNote();
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the "Stitched" and "Unstitched" radio buttons
  const stitchedRadio = document.querySelector("#ProductSelect-template--18447529083106__main-8748198068450-option-type-Stitched");
  const unstitchedRadio = document.querySelector("#ProductSelect-template--18447529083106__main-8748198068450-option-type-Unstitched");

  // Get all elements with the class "add-trousers"
  const addTrousers = document.querySelectorAll(".add-trousers");

  // Function to show the add-trousers elements
  function showAddTrousers() {
    addTrousers.forEach(function(element) {
      element.style.display = "block";  // Show the elements with class 'add-trousers'
    });
  }

  // Function to hide the add-trousers elements
  function hideAddTrousers() {
    addTrousers.forEach(function(element) {
      element.style.display = "none";  // Hide the elements with class 'add-trousers'
    });
  }

  // Initially hide the add-trousers by default
  hideAddTrousers();

  // When "Stitched" is selected, show the add-trousers elements
  if (stitchedRadio) {
    stitchedRadio.addEventListener("change", function() {
      if (stitchedRadio?.checked) {
        showAddTrousers();  // Show add-trousers when "Stitched" is selected
      }
    });
  }

  // When "Unstitched" is selected, hide the add-trousers elements
  if (unstitchedRadio) {
    unstitchedRadio.addEventListener("change", function() {
      if (unstitchedRadio?.checked) {
        hideAddTrousers();  // Hide add-trousers when "Unstitched" is selected
      }
    });
  }

  // If the "Stitched" option is already checked when the page loads, show the add-trousers
  if (stitchedRadio?.checked) {
    showAddTrousers();
  }
});
document.addEventListener("DOMContentLoaded", function () {

    function toggleLining() {
        const yardField = document.querySelector("#infiniteoptions-container .yard");
        const selectedType = document.querySelector('input[name="Type"]:checked');

        if (!yardField || !selectedType) return;

        if (selectedType.value.trim().toLowerCase() === "unstitched") {
            yardField.style.setProperty("display", "block", "important");
        } else {
            yardField.style.setProperty("display", "none", "important");

            // Clear Infinite Options selection
            yardField.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
                input.checked = false;
            });
        }
    }

    // Wait until Infinite Options injects its HTML
    const waitForInfiniteOptions = setInterval(function () {

        const yardField = document.querySelector("#infiniteoptions-container .yard");

        if (yardField) {
            clearInterval(waitForInfiniteOptions);

            // Initial check (default selected variant)
            toggleLining();

            // Listen for variant changes
            document.addEventListener("change", function (e) {
                if (e.target.matches('input[name="Type"]')) {
                    // Small delay because Shopify updates variants asynchronously
                    setTimeout(toggleLining, 100);
                }
            });
        }

    }, 200);

});