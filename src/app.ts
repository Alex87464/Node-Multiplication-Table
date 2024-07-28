import { yarg } from './config/plugins';
import { ServerApp } from './presentation/server-app';

// console.log(yarg);

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable } = yarg;
  ServerApp.run({
    base,
    limit,
    showTable,
  });
}
