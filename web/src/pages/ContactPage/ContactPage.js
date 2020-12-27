import BlogLayout from 'src/layouts/BlogLayout'
import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const { addMessage } = useFlash()
  const [createContact, { loading, error }] = useMutation(
    CREATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.home())
        addMessage('Contact created.', { classes: 'rw-flash-success' })
      },
    }
  )
  const onSubmit = (data) => {
    createContact({ variables: { input: data } })
  }
  return (
    <BlogLayout>
      <h1>Contact Page</h1>
      <div className="rw-form-wrapper">
        <Form onSubmit={onSubmit} error={error} validation={{ mode: 'onBlur' }}>
          <FormError
            error={error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          />
          <Label
            name="name"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Name:
          </Label>
          <TextField
            name="name"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="name" className="rw-field-error" />

          <Label
            name="email"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Email:
          </Label>
          <TextField
            name="email"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="email" className="rw-field-error" />

          <Label
            name="message"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Message:
          </Label>
          <TextAreaField
            name="message"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="message" className="rw-field-error" />

          <div className="rw-button-group">
            <Submit disabled={loading} className="rw-button rw-button-blue">
              Save
            </Submit>
          </div>
        </Form>
      </div>
    </BlogLayout>
  )
}

export default ContactPage
