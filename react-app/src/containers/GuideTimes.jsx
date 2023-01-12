import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchTimes, updateTime } from '../helpers/asyncFunctions';

export default function GuideTimes() {
  const [times, setTimes] = useState([]);
  const [mondayAvailablity, setMondayAvailablity] = useState('');
  const [tuesdayAvailablity, setTuesdayAvailablity] = useState('');
  const [wednesdayAvailablity, setWednesdayAvailablity] = useState('');
  const [thursdayAvailablity, setThursdayAvailablity] = useState('');
  const [fridayAvailablity, setFridayAvailablity] = useState('');

  // I am resetting the variables here after update
  const resetValues = () => {
    setMondayAvailablity('');
    setTuesdayAvailablity('');
    setWednesdayAvailablity('');
    setThursdayAvailablity('');
    setFridayAvailablity('');
  };

  // call backend from here for updating the time
  async function updateTimeAvailable(availability, timeToUpdate) {
    await updateTime(availability, timeToUpdate);
    fetchTimes().then((response) => {
      setTimes(response);
    });
    resetValues();
  }

  // load all available times here during page load
  useEffect(() => {
    fetchTimes().then((response) => {
      setTimes(response);
    });
  }, []);

  const handleChange = (event) => {
    setMondayAvailablity(event.target.value);
  };

  // form submit for availablity
  const handleSubmit = (event, day, availability) => {
    event.preventDefault();
    if (availability > 8) {
      alert('Maximum allowed hours is 8');
      resetValues();
      return;
    }
    const timeToUpdate = times.filter((time) => time.day === day);
    updateTimeAvailable(availability, timeToUpdate);
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <h1 className="text-success">Get Set</h1>
          <h2>
            Application to update and view the available times for a given guide
          </h2>
          {times.map((time) => (
            <Row key={time.id}>
              <Col>{time.day}</Col>
              <Col>{time.availability}</Col>
            </Row>
          ))}
          <form onSubmit={(e) => handleSubmit(e, 'Monday', mondayAvailablity)}>
            <label>
              Update Monday Availability
              <input
                type="text"
                value={mondayAvailablity}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form
            onSubmit={(e) => handleSubmit(e, 'Tuesday', tuesdayAvailablity)}
          >
            <label>
              Update Tuesday Availability
              <input
                type="text"
                value={tuesdayAvailablity}
                onChange={(e) => setTuesdayAvailablity(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form
            onSubmit={(e) => handleSubmit(e, 'Wednesday', wednesdayAvailablity)}
          >
            <label>
              Update Wednesday Availability
              <input
                type="text"
                value={wednesdayAvailablity}
                onChange={(e) => setWednesdayAvailablity(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <form
            onSubmit={(e) => handleSubmit(e, 'Thursday', thursdayAvailablity)}
          >
            <label>
              Update Thursday Availability
              <input
                type="text"
                value={thursdayAvailablity}
                onChange={(e) => setThursdayAvailablity(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <form onSubmit={(e) => handleSubmit(e, 'Friday', fridayAvailablity)}>
            <label>
              Update Friday Availability
              <input
                type="text"
                value={fridayAvailablity}
                onChange={(e) => setFridayAvailablity(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}
