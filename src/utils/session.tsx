import { v4 as uuidv4 } from "uuid"

/**
 * Set cookie for the embeddable chat session
 * @param name cookie name
 * @param value Cookie value
 * @param days Duration in days
 */
const setCookie = (name: string, value: string, days: number) => {
  let expires = ""
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/"
}


/**
 * Retrieve cookie value
 * @param name Cookie name
 * @returns Cookie value or null
 */
const getCookie = (name: string) => {
  const nameEQ = name + "="
  const ca = document.cookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const Session = (): string => {
  const key = "__sessionId__docq_embed"

  let id = getCookie(key)
  if (!id) {
    id = uuidv4();
    setCookie(key, id, 1)
  }
  return id
}
