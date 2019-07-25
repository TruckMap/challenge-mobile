import people from './data/people.json';

/*
Generic boilerplate, but assume that fetching/searching people is asynchronous
*/

export default {
  getPerson(id) {
    return new Promise((resolve) => {
      // TODO?
    });
  }
  getPeople() {
    return new Promise((resolve) => {
      // TODO?
      /* example:
      setTimeout(() => {
        resolve(people);
      }, 500);
      */
    });
  }
}