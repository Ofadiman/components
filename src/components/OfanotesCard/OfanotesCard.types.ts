import { FC } from 'react'

export interface OfanotesCardProps {
  buttonText: string
  className?: string
  description: string
  icons: FC[]
  image: string
  onActionButtonClick: () => void
}

export interface StyledOfanotesCardImageProps extends Pick<OfanotesCardProps, 'image'> {}
