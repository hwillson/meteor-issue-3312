import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  notIterable() {
    return 'Hey, you can\'t iterate over a string!';
  },
});
