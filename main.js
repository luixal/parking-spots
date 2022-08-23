const { createApp } = Vue;

createApp({
  data() {
    return {
      currentWeekDayIndex: (new Date()).getDay() - 1
    }
  },

  computed: {
    items() {
      console.log(data);
      return data;
    }
  },

  methods: {
    isCurrentWeekDay(index) {
      return index === this.currentWeekDayIndex;
    }
  }
}).mount('#app');
