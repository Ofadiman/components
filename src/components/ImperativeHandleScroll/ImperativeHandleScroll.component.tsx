import React, { forwardRef, MutableRefObject, useImperativeHandle, useRef } from 'react'

import {
  StyledButton,
  StyledImperativeHandleScroll,
  StyledLog,
  StyledLogDisplay,
  StyledLogMessage,
  StyledLogTitle
} from './ImperativeHandleScroll.styles'
import { ExtendedHTMLDivElement, ImperativeHandleScrollProps, PostDisplayProps } from './ImperativeHandleScroll.types'
import { Log } from './ImperativeHandleScroll.utils'

const LogDisplay = forwardRef<ExtendedHTMLDivElement | null, PostDisplayProps>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToTop = (): void => {
    if (containerRef.current !== null) {
      containerRef.current.scrollTop = 0
    }
  }
  const scrollToBottom = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }

  useImperativeHandle(
    ref,
    () => {
      if (containerRef.current === null) {
        return {
          ...(ref as MutableRefObject<HTMLDivElement>).current,
          scrollToBottom: () => {
            console.info('"scrollToBottom" called on uninitialized containerRef.')
          },
          scrollToTop: () => {
            console.info('"scrollToTop" called on uninitialized containerRef.')
          }
        }
      }

      return {
        ...containerRef.current,
        scrollToBottom,
        scrollToTop
      }
    },
    [ref]
  )

  return (
    <StyledLogDisplay ref={containerRef} role={'log'}>
      {props.posts.map(({ id, message, title }) => (
        <StyledLog key={id}>
          <StyledLogTitle>{title}</StyledLogTitle>
          <StyledLogMessage>{message}</StyledLogMessage>
        </StyledLog>
      ))}
    </StyledLogDisplay>
  )
})

LogDisplay.displayName = 'LogDisplay'

export const ImperativeHandleScroll: FC<ImperativeHandleScrollProps> = ({ className }) => {
  const postsRef = useRef<Log[]>(new Array(20).fill(null).map((_, index) => new Log(index.toString())))
  const postDisplayRef = useRef<ExtendedHTMLDivElement>(null)

  const handleScrollToBottom = (): void => {
    if (postDisplayRef.current) {
      postDisplayRef.current.scrollToBottom()
    }
  }

  const handleScrollToTop = (): void => {
    if (postDisplayRef.current) {
      postDisplayRef.current.scrollToTop()
    }
  }

  return (
    <StyledImperativeHandleScroll className={className}>
      <StyledButton onClick={handleScrollToBottom}>{'Scroll to bottom'}</StyledButton>
      <StyledButton onClick={handleScrollToTop}>{'Scroll to top'}</StyledButton>
      <LogDisplay posts={postsRef.current} ref={postDisplayRef} />
    </StyledImperativeHandleScroll>
  )
}
