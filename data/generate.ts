import * as faker from 'faker';
import * as _ from 'lodash';
import * as fs from 'fs';

function generateData() {
  return {
    people: _.times(100, n => {
      return {
        id: n,
        name: faker.name.findName(),
        location: `${faker.address.city()}, ${faker.address.state(true)}`
      };
    })
  };
}

function writeData(json) {
  fs.writeFile('./data/db.json', json, err => {
    if (err) {
      console.error(`ERROR: ${err.message}`);
    } else {
      console.log('SUCCESS: Mock API data generated.');
    }
  });
}

function refreshData() {
  const data = generateData();
  const json = JSON.stringify(data);
  writeData(json);
}

refreshData();
