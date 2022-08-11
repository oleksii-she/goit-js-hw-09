import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateTimePicker: document.querySelector('input#datetime-picker'),
  value: document.querySelector('.value'),
  btnStart: document.querySelector('[data-start]'),

  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.setAttribute('disabled', true);
refs.btnStart.addEventListener('click', () => {
  setInterval(() => {
    textValueTime(convertMs(timerId - Date.now()));
  }, 1000);
});

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const curretTime = Date.now();
    const pastTime = selectedDates[0].getTime() - curretTime;
    if (pastTime < 0) {
      refs.btnStart.setAttribute('disabled', true);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      timerId = selectedDates[0].getTime();
      console.log(timerId);
      refs.btnStart.removeAttribute('disabled', true);
      console.log(curretTime);
    }
  },
};

flatpickr(refs.dateTimePicker, options);

function textValueTime({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = addLeadingZero(days);
  refs.dataHours.textContent = addLeadingZero(hours);
  refs.dataMinutes.textContent = addLeadingZero(minutes);
  refs.dataSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

convertMs(2000); // {days: 0, hours: 0, minutes: 0, seconds: 2}
convertMs(140000); // {days: 0, hours: 0, minutes: 2, seconds: 20}
convertMs(24140000); // {days: 0, hours: 6 minutes: 42, seconds: 20}
