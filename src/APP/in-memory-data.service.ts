import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const actions = [
      { code: 'search' , description: 'search existing clocks by criteria'},
      { code: 'create clock', description: 'create a new clock' },
      { code: 'update clock', description: 'update the properties of a clock' },
      { code: 'extend clock', description: 'extend the duration of a clock' },
      { code: 'suspend clock', description: 'suspend a running clock' },
      { code: 'resurrect clock', description: 'resurrect an ended clock' },
      { code: 'get clock status', description: 'get the state of the clock on a specific date' }
    ];
    return {actions};
  }
}