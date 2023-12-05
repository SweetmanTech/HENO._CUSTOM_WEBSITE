import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker"
import { useDateSelect } from "../../providers/DateSelectProvider"
import useCalendarLocale from "../../hooks/useCalendarLocale"

const DateSelect = () => {
  const { setSelectedDay, selectedDay } = useDateSelect()
  const locale = useCalendarLocale()

  const onSelectDate = (value) => {
    setSelectedDay(value)
  }

  return (
    <Calendar
      value={selectedDay}
      onChange={onSelectDate}
      calendarClassName="heno-calendar"
      minimumDate={utils("en").getToday()}
      locale={locale}
      calendarTodayClassName="after:!content-[''] after:!h-0"
    />
  )
}

export default DateSelect
