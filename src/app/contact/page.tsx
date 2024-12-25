import React from 'react'
import { CustomerService } from '../components/contact/CustomerService'
import { ContactForm } from '../components/contact/ContactForm'

export default function page() {
    return (
        <div>
            <CustomerService />
            <ContactForm />
        </div>
    )
}
