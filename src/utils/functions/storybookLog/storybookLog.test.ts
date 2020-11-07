import { storybookLog } from './storybookLog.function'

describe('storybookLog function', () => {
  const consoleLogMessage = 'storybookLog called'

  it('should return a function', () => {
    const returned = storybookLog(consoleLogMessage)

    expect(typeof returned).toEqual('function')
  })

  it('should call `console.log` with passed message', () => {
    const consoleLogSpy = jest.spyOn(console, 'log')
    storybookLog(consoleLogMessage)()

    expect(consoleLogSpy).toHaveBeenCalledTimes(1)
  })
})
