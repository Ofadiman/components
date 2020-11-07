import { css } from 'styled-components'

export const createTypography = (): Typography => ({
  body: css`
    font-size: 1.6rem;
    font-weight: 400;
  `,
  button: css`
    font-size: 1.8rem;
    font-weight: 400;
  `,
  caption: css`
    font-size: 1.4rem;
    font-weight: 400;
  `,
  h1: css`
    font-size: 3rem;
    font-weight: 400;
  `,
  h2: css`
    font-size: 2.8rem;
    font-weight: 400;
  `,
  h3: css`
    font-size: 2.6rem;
    font-weight: 400;
  `,
  h4: css`
    font-size: 2.4rem;
    font-weight: 400;
  `,
  h5: css`
    font-size: 2.2rem;
    font-weight: 400;
  `,
  h6: css`
    font-size: 2rem;
    font-weight: 400;
  `,
  subtitle: css`
    font-size: 1.4rem;
    font-weight: 400;
  `
})
