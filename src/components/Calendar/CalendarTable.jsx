import React from "react";
import moment from "moment/moment";

export const getToday = () => {
    return new Date(2024, 3, 2);
}

const getWeeks = () => {
    const now = getToday()
    moment.locale('ru');

    const firstDayOfWeekFirstDayOfMonth = moment(now).startOf('month').startOf('week');
    const lastDayOfWeekLastDayOfMonth = moment(now).endOf('month').endOf('week');
    let day = firstDayOfWeekFirstDayOfMonth.clone();
    const dayArray = [];

    while (day.isBefore(lastDayOfWeekLastDayOfMonth)) {

        let week = [];

        for (let i = 0; i < 7; i++) {
            week.push(
                {
                    date: day.clone(),
                    isToday: day.isSame(now, 'day'),
                    isOtherMonth: !day.isSame(now, 'month'),
                }
            );

            day.add(1, 'day');
        }
        dayArray.push(week);
    }

    return dayArray;
}

export const getGenetiveMonth = (day) => {
    const genetiveArray =  ['января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return genetiveArray[moment(day).month()];
}

export const CalendarTable = () => {
    const weeks = getWeeks();

    return (
        <table className="ui-datepicker-calendar">
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="ui-datepicker-week-end" />
                <col className="ui-datepicker-week-end" />
            </colgroup>
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody>
            {
                weeks.map((week, index) => (
                <TableRow key={index} days={week} />
            ))
            }
            </tbody>

        </table>

    );
};

const TableRow = ({ days }) => {
    return (
        <tr>
            {days.map((data, index) => (
                <DayCell key={index} data={ data } />
            ))}
        </tr>
    );
};

const DayCell = ({ data }) => {
    const { date, isToday, isOtherMonth } = data;
    const classNames = `ui-datepicker-day ${isToday ? 'ui-datepicker-today' : ''} ${isOtherMonth ? 'ui-datepicker-other-month' : ''}`;

    return <td className={classNames}>{ date.format('D') }</td>;
};

