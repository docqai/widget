import { v4 as uuidv4 } from "uuid"

export const Session = (): string => {
  const key = "__sessionId__@docq_embed"

  let id = sessionStorage.getItem(key)
  if (!id) {
    id = uuidv4();
    sessionStorage.setItem(key, id)
  }
  return id
}
