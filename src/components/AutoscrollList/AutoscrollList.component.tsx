import React, { MouseEvent, useLayoutEffect, useRef, useState } from 'react'

import {
  StyledAutoscrollList,
  StyledAutoscrollListWrapper,
  StyledButton,
  StyledListItem
} from './AutoscrollList.styles'
import { AutoscrollListProps } from './AutoscrollList.types'
import { initialMessages, Message } from './AutoscrollList.utils'

export const AutoscrollList: FC<AutoscrollListProps> = ({ className }) => {
  const containerRef = useRef<HTMLUListElement>(null)
  const lastListElementRef = useRef<HTMLLIElement>(null)
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleMessageAdd = (): void => {
    const lastListItem = lastListElementRef.current

    if (lastListItem) {
      setMessages((prevMessages) => [...prevMessages, new Message(Number(lastListItem.id) + 1)])
    }
  }

  const handleMessageRemove = (event: MouseEvent): void => {
    const clickedItemId = event.currentTarget.id

    setMessages((prevMessages) => prevMessages.filter(({ id }) => Number(clickedItemId) !== id))
  }

  useLayoutEffect(() => {
    const container = containerRef.current
    const lastListElement = lastListElementRef.current

    if (container && lastListElement) {
      const { scrollHeight, scrollTop, offsetHeight } = container
      const isScrolledToBottom = scrollHeight - offsetHeight - scrollTop - lastListElement.offsetHeight === 0

      if (isScrolledToBottom) {
        container.scrollTop = container.scrollHeight
      }
    }
  })

  useLayoutEffect(() => {
    const container = containerRef.current

    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [])

  return (
    <StyledAutoscrollListWrapper>
      <StyledButton onClick={handleMessageAdd}>{'Add a message'}</StyledButton>
      <StyledAutoscrollList className={className} ref={containerRef}>
        {messages.map(({ id, content }, index) => (
          <StyledListItem
            id={id.toString()}
            key={id}
            onClick={handleMessageRemove}
            ref={index === messages.length - 1 ? lastListElementRef : null}
          >
            {content}
          </StyledListItem>
        ))}
      </StyledAutoscrollList>
    </StyledAutoscrollListWrapper>
  )
}
