export default function sleep(time: number = 0) {
  return new Promise((fn) => {
    setTimeout(fn, time)
  })
}
