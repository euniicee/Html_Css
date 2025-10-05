import React from 'react'

export default function ErrorTest() {
  throw new Error('This is a deliberate test error for ErrorBoundary')
}