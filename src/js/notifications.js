import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
export default {
    tooManyMatches() {
      error({
        text: 'Too many matches found! Please enter a more spesific query!',
      });
    },
    badRequest() {
      error({
        text: 'нету такого !'
      });
    },   
  };
  