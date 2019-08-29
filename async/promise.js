var myPromisse = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/lucasq');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 20) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

// var result = myPromisse()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function (params) {
//         console.warn(error);
//     });

// utilizando o axios
axios.get('https://api.github.com/users/lucaasq')
    .then(function(response) {
        console.log(response);
    })
    .catch(function (params) {
        console.warn(params);
    });