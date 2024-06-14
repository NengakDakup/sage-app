import DashboardChatHistory from '@/components/DashboardChatHistory'
import DashboardFlascardsList from '@/components/DashboardFlashcardsList'
import React from 'react'

export default function DashboardPage () {
  return (
    <>
      <DashboardChatHistory />
      <DashboardFlascardsList />
    </>
  )
}
