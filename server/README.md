# server

The backend for application to view and update guide times

## To install dependencies

### `npm install`

## To start the application in dev mode

### `npm run dev`

The will reload the app if you make edits.<br />

Runs the app in the development mode.<br />

# Two end points are exposed

## [GET] http://localhost:9000/guide-time/availableTimes

## [POST] http://localhost:9000/guide-time/updateAvailabilityTime

### Post Sample Body

```
{
    "id": "i0Nn6qvicHP5DTuKTyas0",
    "userId": "123456",
    "day": "Wednesday",
    "availability": "2"
}
```
