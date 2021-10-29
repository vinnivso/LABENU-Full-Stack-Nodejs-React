import uuid, { v4 } from "uuid"

export default class generateIdentity {
  generateId(): string {
    return v4()
  }
}