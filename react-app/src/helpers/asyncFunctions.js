// call backend end point to fetch availability times
export const fetchTimes = async () => {
  const response = await fetch(
    'http://localhost:9000/guide-time/availableTimes'
  );
  const data = await response.json();
  return data;
};

// call backend end point to update availability times
export const updateTime = async (availability, timeToUpdate) => {
  const response = await fetch(
    'http://localhost:9000/guide-time/updateAvailabilityTime',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: timeToUpdate[0].id,
        userId: '123456',
        day: timeToUpdate[0].day,
        availability,
      }),
    }
  );
  const data = await response.json();
  return data;
};
