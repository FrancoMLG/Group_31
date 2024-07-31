import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from './event-utils'
import { fetchTicketsByTechnician } from '../../api'
import './Calendar.css'

export default function Calendar() {
  const [assignedTasks, setAssignedTasks] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("profile"));
        if (!user) return;
        const data = await fetchTicketsByTechnician(user.result._id);
        const events = data.data.map(ticket => ({
          id: createEventId(),
          title: `${ticket.creator.firstName} ${ticket.creator.lastName}`, 
          start: ticket.startTime,
          end: ticket.endTime,
          allDay: false
        }));
        setAssignedTasks(events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTickets();
  }, []);

  function handleDateSelect(selectInfo) {
    let title = prompt('title for event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); 

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events={assignedTasks}
      editable={false} // Disable editing
      eventClick={() => {}} // Disable event clicking
      selectable={true}
      select={handleDateSelect}
    />
  );
}