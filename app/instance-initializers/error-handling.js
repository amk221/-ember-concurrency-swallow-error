/* eslint-disable no-console */

import Ember from 'ember';
import RSVP from 'rsvp';

function unhandledError(error) {
  console.log('unhandled error');

  throw error;
}

function unhandledPromiseRejection(error) {
  console.log('unhandled promise rejection');

  throw error;
}

export function initialize() {
  Ember.onerror = unhandledError;
  RSVP.on('error', unhandledPromiseRejection);
}

export default {
  initialize
};
