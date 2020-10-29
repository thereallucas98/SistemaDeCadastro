import Contact from '../models/Contact';

export default {
  render(contact: Contact) {
    return {
      id: contact.id,
      name: contact.contact,
      number: contact.number
    };
  }
}