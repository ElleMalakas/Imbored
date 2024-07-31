fetch('./products.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data["public/avocado.png"].id);
    })
