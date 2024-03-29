import axios from './axios'

export const getEventsRequest = () => axios.get('/events');

export const getEventsClientsRequest = () => axios.get('/eventsClients');

export const getEventRequest = (id) => axios.get(`/events/${id}`);

export const createEventRequest = (event) => axios.post('/events', event);

export const updateEventRequest = (id, event) => axios.put(`/events/${id}`, event);

export const deleteEventRequest = (id) => axios.delete(`/events/${id}`);

export const toggleEventDoneRequest = (id, done) => axios.put(`/events/${id}`, { done });