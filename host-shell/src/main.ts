import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'remote-products': 'http://localhost:4201/remoteEntry.json',
  'remote-users': 'http://localhost:4203/remoteEntry.json',
  'remote-reports': 'http://localhost:4202/remoteEntry.json'
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
