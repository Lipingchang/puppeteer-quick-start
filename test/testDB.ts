import { init } from '../src/dbUtils';

(async function() {
  const client1 = init();
  const client2 = init();
  console.log(client1, client2)
})();