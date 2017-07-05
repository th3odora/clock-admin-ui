import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const actions = [
      { id: 1, code: 'search' , description: 'search existing clocks by criteria'},
      { id: 2, code: 'create clock', description: 'create a new clock' },
      { id: 3, code: 'update clock', description: 'update the properties of a clock' },
      { id: 4, code: 'extend clock', description: 'extend the duration of a clock' },
      { id: 5, code: 'suspend clock', description: 'suspend a running clock' },
      { id: 6, code: 'resurrect clock', description: 'resurrect an ended clock' },
      { id: 7, code: 'get clock status', description: 'get the state of the clock on a specific date' },
      { id: 8, code: 'terminate clock', description: 'terminate the clock'}
    ];
    return {actions};
  }
}