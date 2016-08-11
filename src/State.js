import Freezer from 'freezer-js'

let State = new Freezer({
    app: {
        searchString: '',
        loading: false
    },
    deviceList: [],
})

State.on('loadDevices', () => {
    State.get().app.set({loading: true})
    fetch('http://stg.api.axonize.com/odata/devices', {
        method: 'GET', 
        headers,
    })
        .then(res => res.json())
        .then(json => State.get().set('deviceList', json.value))
        .catch(err => alert('Request Error:' + err))
        .then(State.get().app.set({loading: false}))
})

const headers = new Headers({
  'Content-Type': 'application/json',
  'appId': 'b799aae9-51b8-4613-8a1d-894a80b35481',
  'Authorization': 'Fill me up'
});

export default State