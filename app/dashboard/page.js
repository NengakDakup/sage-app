import DashboardChat from '@/components/DashboardChat'
import DashboardChatHistory from '@/components/DashboardChatHistory'
import DashboardFlascardsList from '@/components/DashboardFlashcardsList'
import React from 'react'

export default function DashboardPage () {
  return (
    <>
        <DashboardChat />
        <DashboardChatHistory />
        <DashboardFlascardsList />
    </>
  )
}
