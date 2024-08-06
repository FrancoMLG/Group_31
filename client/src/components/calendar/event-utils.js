// from https://github.com/fullcalendar/fullcalendar-react

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

// for creating an event
export function createEventId() {
  return String(eventGuid++)
}
