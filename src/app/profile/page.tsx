import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ProfileClient from './ProfileClient'

export default async function ProfilePage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value
  if (!token) redirect('/login')

  let initialUser: any = { name: '—', phone: '—' }
  try {
    const res = await fetch('https://dd.rangpurit.com/api/authapi/me', {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    })
    if (res.status === 401) redirect('/login')
    const data = await res.json()
    initialUser = data?.user ?? initialUser
  } catch {}

  return <ProfileClient initialUser={initialUser} />
}

