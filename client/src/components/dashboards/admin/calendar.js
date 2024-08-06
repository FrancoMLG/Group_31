// from https://github.com/fullcalendar/fullcalendar-react
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createEventId } from './event-utils';
import { fetchTicketsByTechnician, updateTicket } from '../../../api';

export default function Calendar({ technicianId }) {
  const [assignedTasks, setAssignedTasks] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {

        // get tickets by technician id
        if (!technicianId) return;
        const data = await fetchTicketsByTechnician(technicianId);
        const events = data.data.map(ticket => ({
          id: ticket._id, // Use the ticket ID for updating
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
  }, [technicianId]);


  // allow admin to update ticket with resizing the box
  const handleEventResize = async (resizeInfo) => {
    const { event } = resizeInfo;
    try {
      await updateTicket(event.id, {
        startTime: event.start.toISOString(),
        endTime: event.end.toISOString()
      });
      alert('Event updated successfully');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  // allow admin to change time of ticket with drag and drop
  const handleEventDrop = async (dropInfo) => {
    const { event } = dropInfo;
    try {
      await updateTicket(event.id, {
        startTime: event.start.toISOString(),
        endTime: event.end.toISOString()
      });
      alert('Event updated successfully');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  // not allowed, from
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

  function handleEventClick(clickInfo) {
    if (window.confirm(`delete? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
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
          eventContent={renderEventContent} 
          eventClick={handleEventClick}
          events={assignedTasks}
          eventResize={handleEventResize} 
          eventDrop={handleEventDrop} 
        />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>&nbsp;&nbsp;
      <i>{eventInfo.event.title}</i>
    </>
  );
}