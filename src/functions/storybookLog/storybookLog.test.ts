import { storybookLog } from './storybookLog'

describe('storybookLog function', () => {
  const consoleLogMessage = 'storybookLog called'
  const args = ['something', 5]
  const consoleInfoSpy = jest.spyOn(console, 'info')

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return a function', () => {
    const returned = storybookLog(consoleLogMessage)

    expect(typeof returned).toEqual('function')
  })

  it('should call `console.info` with passed message', () => {
    storybookLog(consoleLogMessage)()

    expect(consoleInfoSpy).toHaveBeenCalledWith(consoleLogMessage)
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1)
  })

  it('should call `console.info` for passed args', () => {
    storybookLog()(...args)

    expect(consoleInfoSpy).toHaveBeenCalledWith('arg #0', JSON.stringify(args[0], null, 2))
    expect(consoleInfoSpy).toHaveBeenCalledWith('arg #1', JSON.stringify(args[1], null, 2))
  })

  it('should call `console.info` with passed message and args', () => {
    storybookLog(consoleLogMessage)(...args)

    expect(consoleInfoSpy).toHaveBeenCalledWith(consoleLogMessage)
    expect(consoleInfoSpy).toHaveBeenCalledWith('arg #0', JSON.stringify(args[0], null, 2))
    expect(consoleInfoSpy).toHaveBeenCalledWith('arg #1', JSON.stringify(args[1], null, 2))
    expect(consoleInfoSpy).toHaveBeenCalledTimes(3)
  })

  it('should not call `console.info` with no message and args passed', () => {
    storybookLog()()

    expect(consoleInfoSpy).not.toHaveBeenCalledTimes(1)
  })
})
