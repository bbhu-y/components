export const sleep = async (timeout = 0) => {
  await (async () => {
    await new Promise(resolve => setTimeout(resolve, timeout))
  })()
}