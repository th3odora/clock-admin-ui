import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const actions = [
      { code: 'search' },
      { code: 'create clock' },
      { code: 'update clock' },
      { code: 'extend clock' },
      { code: 'suspend clock' },
      { code: 'resurrect clock' },
      { code: 'get clock status' },
      { code: 'DB trail' }
    ];
    return {actions};
  }
}