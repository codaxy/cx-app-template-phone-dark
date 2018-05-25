import {Controller} from "cx/ui";
import {sameDate, zeroTime} from "cx/util";
import {oneOf} from "../../util/oneOf";

export default class extends Controller {
    onInit() {
        this.store.init('month', zeroTime(new Date()).toISOString());

        this.store.init('list', Array.from({length: 1000}, (_, i) => ({
            id: i + 1,
            time: Date.now() + i * 15 * 60 * 1000,
            text: `${oneOf(["Appointment", "Lunch", "Meeting", "Breakfast", "Dinner"])} #${i+1}`
        })));

        this.addComputable('weeks', ['month', 'items'], (startDate, data) => {
            let weeks = [];
            let date = new Date(startDate);
            let month = date.getMonth();
            date = new Date(date.getFullYear(), month, 1);

            //find first Monday
            while (date.getDay() != 1)
                date.setDate(date.getDate() - 1);

            do {
                let days = [];

                for (let day = 0; day < 7; day++) {

                    let hours = null,
                        active = date.getMonth() == month;

                    if (data && active)
                        hours = data.filter(x => sameDate(new Date(x.date), date)).reduce((acc, x) => acc + x.hours, 0);

                    days.push({
                        day: date.getDate(),
                        date: date.toISOString(),
                        active,
                        hours: hours > 0 ? hours : null,
                    });

                    date.setDate(date.getDate() + 1);
                }

                weeks.push({
                    days
                })
            }
            while (date.getMonth() == month);

            return weeks;
        });
    }

    onSelectDay(e, {store}) {
        store.copy('$record.date', "month");
    }
}
