import { Log } from './ImperativeHandleScroll.utils'

export interface ImperativeHandleScrollProps {
  className?: string
}

export interface ExtendedHTMLDivElement extends HTMLDivElement {
  scrollToBottom: () => void
  scrollToTop: () => void
}

export interface PostDisplayProps {
  posts: Log[]
}
