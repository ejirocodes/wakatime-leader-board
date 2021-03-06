# Project Alpha (Wakatime API)

## Technologies Used

### This project was bootsrapped with Nuxtjs.

### Vue Chakra UI was used as against Vuetify or Bootstrap because none is as modular and light-weight as Charka UI

### The buildt-in JavaScript fetch API was used for API call in favour of axios or jQuery to reduce bundle size and improve performance

### This project is hosted on [Netlify](https://wakatime.netlify.app/)

## Error Handling
Errors were handles gracefully and displayed with Vue Chakra toast
## Demo

![Demo](./assets/demo.png)

## Challenges

Wakatime was blocking me from accessing the API because of CORS, so I had to build a little backend wrapper that returns the Wakatime API with CORS enabled. You can find the [project here](https://github.com/ejirocodes/wakatime/blob/master/index.js)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
