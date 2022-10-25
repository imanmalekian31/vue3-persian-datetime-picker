# persian-datetime-picker-vue (based on dayjs)

[![npm version](https://badge.fury.io/js/persian-datetime-picker-vue.svg)](https://www.npmjs.com/package/persian-datetime-picker-vue)

> A vue plugin to select jalali date and time based on `dayjs`

See documentation and demo at [vue-persian-datetime-picker](https://talkhabi.github.io/vue-persian-datetime-picker).

If you are using vuejs 2, please refer to [this repository](https://github.com/imanmalekian31/vue-persian-datetime-picker).

## Installation

### browser

```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.5/dayjs.min.js"></script>
<script src="/dist/persian-datetime-picker-vue.umd.min.js"></script>
<div id="app">
  <date-picker v-model="date"></date-picker>
</div>
<script>
  Vue.createApp({
    data: function() {
      return {
        date: '1400/01/01'
      }
    },
    components: {
      DatePicker: Vue3PersianDatetimePicker
    }
  }).mount('#app')
</script>
```

### npm

```bash
npm install persian-datetime-picker-vue --save
```

### Usage

```javascript
// main.js

import { createApp } from 'vue'
import Vue3PersianDatetimePicker from 'persian-datetime-picker-vue'
const app = createApp({})
app.component('DatePicker', Vue3PersianDatetimePicker)
app.mount('#app')
```

Or in component

```html
<template>
  <date-picker v-model="date"></date-picker>
</template>

<script>
  import DatePicker from 'persian-datetime-picker-vue'
  export default {
    data() {
      return {
        date: ''
      }
    },
    components: { DatePicker }
  }
</script>
```

### You can also set default values:

```javascript
// main.js

import Vue3PersianDatetimePicker from 'persian-datetime-picker-vue'
const app = createApp({})
app.use(Vue3PersianDatetimePicker, {
  name: 'CustomDatePicker',
  props: {
    format: 'YYYY-MM-DD HH:mm',
    displayFormat: 'YYYY-MM-DD',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: false
    //...
    //... And whatever you want to set as default.
    //...
  }
})
```

Then use in component

```html
<custom-date-picker v-model="date"></custom-date-picker>
```

### [Click to see full documentation and demo](https://talkhabi.github.io/vue-persian-datetime-picker)

## License

This project is licensed under the MIT License
