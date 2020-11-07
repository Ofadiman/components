import { getLightnessOffsetColor } from './getLightnessOffsetColor'

describe('getTonalOffsetColor function', () => {
  const initialColor = 'hsl(260, 100%, 50%)'

  it('should throw an error when color format is not HSL', () => {
    expect(() => getLightnessOffsetColor('hsl(invalid, 100, 15)', 10)).toThrow()
  })

  it('should adjust color according to `lightnessOffsetFactor`', () => {
    expect(getLightnessOffsetColor(initialColor, -20)).toEqual('hsl(260, 100%, 30%)')
    expect(getLightnessOffsetColor(initialColor, -10)).toEqual('hsl(260, 100%, 40%)')
    expect(getLightnessOffsetColor(initialColor, 0)).toEqual('hsl(260, 100%, 50%)')
    expect(getLightnessOffsetColor(initialColor, 10)).toEqual('hsl(260, 100%, 60%)')
    expect(getLightnessOffsetColor(initialColor, 20)).toEqual('hsl(260, 100%, 70%)')
  })
})
