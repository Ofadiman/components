export const storybookLog = (message?: string) => (...args: unknown[]): void => {
  if (message !== undefined) {
    console.info(message)
  }

  if (args.length > 0) {
    console.info(args)
  }
}
