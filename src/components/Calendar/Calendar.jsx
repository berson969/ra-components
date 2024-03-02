import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { CalendarTable, getToday, getGenetiveMonth } from "./CalendarTable";


export const Calendar = () => {
    const now = getToday();
    const month =  getGenetiveMonth(now);

    return (
        <div className="root-calendar">
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{ moment(now).format('dddd') }</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{ moment(now).format('D')}</div>
                        <div className="ui-datepicker-material-month">{ month }</div>
                        <div className="ui-datepicker-material-year">{ moment(now).format('YYYY') }</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{ moment(now).format('MMMM') }</span>&nbsp;<span className="ui-datepicker-year">{ moment(now).format('YYYY') }</span>
                    </div>
                </div>
                <CalendarTable />
            </div>
        </div>
        )
}
