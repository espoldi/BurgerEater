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
                let newDevour = e.target.getAttribute('data-newdevour');
                console.log(newDevour);
                if (newDevour === 0)  {newDevour += 1;};
                console.log(newDevour);
                let newDevourState = {
                    devoured: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    console.log(newDevourState);
                    // console.log(response);
                    if (response.ok) {
                        console.log(`changed devoured to: ${newDevourState}`);
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
                name: document.getElementById('ca').value.trim()
                //devoured: document.getElementById('devour').checked,
            };
console.log(newBurger);
            // Send POST request to create a new quote
            fetch('/api/burgers', {
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
