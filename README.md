# Setup

## Requirements
- [Node.js](https://nodejs.org/), tested with 10.15.1 LTS

## Project setup
1. Clone this repository to your machine with `git clone https://github.com/Delivator/sync-video.git` or download and unpack the repo from [here](https://github.com/Delivator/sync-video/archive/master.zip)
2. Navigate to the new created folder with `cd sync-video`
3. Install dependencies with `npm install`
4. Create a project in the [firebase console](https://console.firebase.google.com/) and copy the firebase web config ([Getting started with firebase web](https://firebase.google.com/docs/web/setup))
5. Copy the example firebase.json file from `src/firebase_example.json` to `src/firebase.json` and fill it with your config from the firebase console (in json format)

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run production build
(Requires [serve](https://github.com/zeit/serve) to be installed globally)
```
npm start
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
