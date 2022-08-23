const { createApp } = Vue;

createApp({
  data() {
    return {
      currentWeekDayIndex: (new Date()).getDay() - 1,
      hidePast: false,
      hideFuture: false
    }
  },

  computed: {
    items() {
      if (this.hidePast && this.hideFuture) return data.slice(this.currentWeekDayIndex, this.currentWeekDayIndex + 1);
      if (this.hidePast) return data.slice(this.currentWeekDayIndex, 5);
      if (this.hideFuture) return data.slice(0, this.currentWeekDayIndex + 1);
      return data;
    },
    getGridClass() {
      return `md:grid-cols-${this.items.length}`;
    }
  },

  methods: {
    isCurrentWeekDay(index) {
      return this.hidePast ? index === 0 : index === this.currentWeekDayIndex;
    },
    toggleHidePast() {
      this.hidePast = !this.hidePast;
    },
    toggleHideFuture() {
      this.hideFuture = !this.hideFuture;
    }
  }
}).mount('#app');
