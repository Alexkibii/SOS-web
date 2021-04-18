import axios from 'axios';

export function getKyc() {

       const url = 'http://localhost:4000/kyc/subscriberinfo?msisdn=0114959286'
  const flareurl = 'http://localhost:4000/subscribe'
   return axios
        .get(url)
            
       .then(
            data => data.json()
        )
        .catch((error) => {
            console.log(" error", error);
        });
};
  

