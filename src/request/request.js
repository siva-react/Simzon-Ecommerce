import axios from "axios";

const baseURLs = {
    development: 'https://kkbazar.dev.api.ideauxbill.in/', // API server url (Development)
    production: 'https://dev.api.hibiller.com/', // API server url (Production)
    staging: 'https://dev.hibiller.com/',  // API server url (Staging)
  };
  
  const environment = process.env.NODE_ENV
  // const environment = 'production';
  
export const baseRequest = axios.create({
    baseURL: baseURLs[environment],
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  export const imageURL = baseURLs[environment]