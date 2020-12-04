export const storybookLog = (message?: string) => (...args: unknown[]): void => {
  if (message !== undefined) {
    console.info(message)
  }

  args.forEach((arg) => {
    console.info(JSON.stringify(arg))
  })
}
