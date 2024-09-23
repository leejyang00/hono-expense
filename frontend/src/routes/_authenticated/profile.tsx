import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api, userQueryOptions } from '@/lib/api'

export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile,
})

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions)
  if (isPending) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="p-2">
      Hello from profile!
      <p>Hello {data.user.family_name}</p>
      <a href="/api/logout">Logout</a>
    </div>
  )
}
