document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeDevourBtns = document.querySelectorAll('.change-devour');
  
    // Set up the event listener for the create button
    if (changeDevourBtns) {
      changeDevourBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          const newDevour = e.target.getAttribute('data-newdevour');
  
          const newDevourState = {
            devour: newDevour,
          };
  
          fetch(`/api/burger/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newDevourState),
          }).then((response) => {
            if (response.ok) {
              console.log(`changed devoured to: ${newDevour}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          name: document.getElementById('ca').value.trim(),
          devour: document.getElementById('devour').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burger', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // Make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          document.getElementById('ca').value = '';
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  });
  