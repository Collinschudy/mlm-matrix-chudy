import { useState } from "react";
import styles from './calendar.module.css';
import AdminHeader from "../../adminComponents/AdminHeader/AdminHeader";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";


const Calendar = () => {
  
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
      
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete this event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <div className={styles.container}>
      <AdminHeader title="CALENDAR" subtitle="Full Calendar Interactive page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor='grey'
          p="15px"
          border="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents?.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: 'rgb(0,0,50)',
                    color: 'white',
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondaryTypographyProps={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        
        <Box 
        flex="1 1 80%" 
        ml="15px">
          <FullCalendar
          height='70vh'
          
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
            }}
            eventTextColor={'black'}
            initialView="dayGridMonth"
            editable={true}
            
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventClick={handleEventClick}
            select={handleDateClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
                {id:'5545', title: 'Collection of data', date: '2023-06-27' }
            ]}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Calendar;
