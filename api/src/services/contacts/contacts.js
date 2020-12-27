import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'

const validate = (input) => {
  if (input.name && input.name.length < 5) {
    throw new UserInputError('Cannot create a new contact', {
      messages: {
        name: ['name is too short'],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findOne({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  validate(input)
  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  validate(input)
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}
