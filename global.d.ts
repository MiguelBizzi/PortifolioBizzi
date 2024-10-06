import en from './locale/en.json'

type Messages = typeof en

declare global {
  type IntlMessages = Messages
}
