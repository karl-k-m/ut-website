# Tool to generate a list of dates from an ical file. The dates are to be added to the javascript file manually at the start of each semester.

import icalendar
import datetime

# Open ical file as f
with open("ois2-calendar-et.ics", encoding='utf8') as f:
    cal = icalendar.Calendar.from_ical(f.read())

# Get all events
events = cal.walk('vevent')
with open('dates.txt', 'w') as f:
    dates_to_add = ''
    for i in events:
        category = i.get('categories').to_ical().decode('utf8')
        if "kontrolltöö" in category and "järeltöö" not in i.get('description').to_ical().decode('utf8'):
            # get start date
            start = i.get('dtstart').dt
            start = str(start).split(' ')
            dates_to_add += start[0] + '\n'
    f.write(dates_to_add)

# Print dates to add as a list to manually enter into the javascript
dates = dates_to_add.split('\n')
dates.append('2022-12-06') # Manually add dates that are badly inserted in the ical file
for i in dates:
    if i == '':
        dates.remove(i)
dates.sort()
print(dates)