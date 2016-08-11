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
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVtc3lzQGF4b25pemUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRlbmFudElkIjoiNTc0NTZjMGUxODZhMjgxOGU0ZjE4MWRlIiwiYXBwSWQiOiJiNzk5YWFlOS01MWI4LTQ2MTMtOGExZC04OTRhODBiMzU0ODEiLCJyb2xlcyI6WyJBZG1pbiJdLCJ1c2VySWQiOiI1NzQ1NmMxMDE4NmEyODE4ZTRmMTgxZTAiLCJpc3MiOiJodHRwczovL3NvaW90LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NzQ1NmMxMTk3YWY2ZmZiMzAxYjRiYjkiLCJhdWQiOiIxQ0Z4UUJpYmpuTEFlWTdPTFVXam1aV041NlFLYzBIOSIsImV4cCI6MTQ3MDkzNjcxMiwiaWF0IjoxNDcwOTAwNzEyfQ.aFqxtxmxyupoXJDQ0ngA91Ht0SK-ZqfOe18YMymUdtQ'
});

export default State