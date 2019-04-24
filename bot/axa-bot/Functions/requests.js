const axios = require('axios');

function sendCarInfo(form) {
    axios.post('http://localhost:3003/coche', form)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};

function getCarInfo() {
    axios.get('http://localhost:3003/coche')
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

function changeCarInfo(form) {
    axios.put('http://localhost:3003/coche/' + form.dni, form)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};
