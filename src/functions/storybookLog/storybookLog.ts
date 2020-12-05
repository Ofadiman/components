export const storybookLog = (message?: string): ((...args: unknown[]) => void) => {
  return (...args: unknown[]): void => {
    if (message !== undefined) {
      console.info(message)
    }

    args.forEach((arg, index) => {
      /**
       * This `try {} catch {}` block catches circular JSON reference error (e.g. React's SyntheticEvent).
       */
      try {
        console.info(`arg #${index}`, JSON.stringify(arg, null, 2))
      } catch {
        console.info(`arg #${index}`, arg)
      }
    })
  }
}
