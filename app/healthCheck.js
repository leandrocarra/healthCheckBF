var axios = require('axios');

const instance = axios.create({
  timeout: 15000,
});

function checkCheck({ url, name }) {
  return new Promise((resolve, reject) => {
    instance
      .get(url)
      .then(function(response) {
        if (response && response.status === 200) {
          resolve({
            name,
            online: true
          });
        }
      })
      .catch(function(error) {
        resolve({
          name,
          online: false
        });
      });
  });
}

// function checkCheck(urlSite) {
//   return new Promise((resolve, reject) => {
//     request({url: urlSite, timeout: 20000}, function(error, response) {
//       if (response && response.statusCode === 200) {
//         resolve(true);
//       }
//       resolve(false);
//     });
//   });
// }

module.exports = checkCheck;
