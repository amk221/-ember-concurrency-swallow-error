/* eslint-disable no-console */

import Controller from '@ember/controller';
import { task } from 'ember-concurrency';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Controller.extend({
  one() {
    console.log(1);

    // Intentional error
    foo = true;

    return new Promise(resolve => {
      later(() => {
        console.log(1, 'done');
        resolve();
      }, 1000);
    });
  },

  two() {
    console.log(2);

    return new Promise(resolve => {
      later(() => {
        console.log(2, 'done');
        resolve();
      }, 1000);
    });
  },

  task: task(function*() {
    yield this.one();
    yield this.two()
  }).drop()
});
