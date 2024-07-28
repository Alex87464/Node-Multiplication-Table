import { yarg } from './config/plugins';
import { ServerApp } from './presentation/server-app';

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable, n: name, d: dir } = yarg;
  ServerApp.run({
    base,
    limit,
    showTable,
    name,
    dir,
  });
}
