# GetSetUp Guide Availabilility App

This project has both client and server.
Pl refer to specific README files on how to run the app.

First start backend followed by frontend.

## Navigating the application

On opening the applicaiton in UI (http://localhost:3000/home),
it has a navigation bar.

Navigate to Available_Times tab to view and update the times for a given guide.

## Available_Times Tab

This will allow us to view the time for a given guide upto one week with specific days

Updating of times can be done from UI for each day

## Data Modelling 

I have used fakebase to mock backend database. 

2 tables are created in the backend - users and schedule. 
```
This can be expanded to Production by adding more users and schedules. 
It can be directly lifted and put to PROD Dynamo db. 
```

```
Both table are joined by userId.
Hence retrieving schedule for a given user is very easy. 
```

## Seperation of Concerns  

Clear demarcation of controller and service layers is implemented.

If business processing on data is required, then service layer can be used for that and a new repository layer can be added in future where we should be able to move DB related logic.
