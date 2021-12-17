import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default function Calendar() {
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
    return (
        <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        contentHeight= {350}
        dateClick={handleDateClick}
      />
    )
}
