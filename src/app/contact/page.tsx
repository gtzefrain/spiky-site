'use client'

import { useState } from 'react'

export default function ContactPage() {
    const [status, setStatus] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                query: formData.get('query'),
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            setStatus('Your message has been sent!')
            event.currentTarget.reset()
        } else {
            setStatus('Something went wrong. Please try again later.')
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="w-full p-2 border border-accent rounded bg-white text-black"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-2 border border-accent rounded bg-white text-black"
                    />
                </div>

                <div>
                    <label htmlFor="query" className="block mb-1">Query</label>
                    <textarea
                        id="query"
                        name="query"
                        required
                        rows={5}
                        className="w-full p-2 border border-accent rounded bg-white text-black"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-50 text-white px-4 py-2 rounded transition-all duration-200 hover:scale-105 hover:bg-foreground"
                >
                    Send
                </button>

                {status && <p className="text-sm mt-2">{status}</p>}
            </form>
        </div>
    )
}