export const storybookLog = (message: string) => (...args: unknown[]): void => {
  console.info(message)

  if (args.length > 0) {
    console.info(args)
  }
}
