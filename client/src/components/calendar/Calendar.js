import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from './event-utils'
import { fetchTicketsByTechnician } from '../../api'

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
          title: ticket.category,
          start: ticket.startTime,
          end: ticket.endTime,
          submitter: ticket.creator,
          allDay: false
        }));
        setAssignedTasks(events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTickets();
  }, []); // Ensure this useEffect runs only once

  function handleDateSelect(selectInfo) {
    let title = prompt('title for event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  function handleEventClick(clickInfo) {
    if (window.confirm(`delete? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <div className='calendar'>
      <div className='calendar-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          events={assignedTasks} // set the events here
        />
      </div>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>&nbsp;&nbsp;
      <i>{eventInfo.event.title}</i>
      {/* <span>{eventInfo.event.extendedProps.submitter}</span> */}
    </>
  )
}