import moment from 'moment';

export default {
  methods: {
    getDiffTime(t) {
      return moment.duration(moment().diff(t, 'minutes'), 'minutes').humanize(false);
    },

    getTime(t) {
      return moment(t).format('H:mm');
    }
  }
}
