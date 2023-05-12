const sleep = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default (async function showResults(values: any) {
  await sleep(500);
  console.log(values);
});
