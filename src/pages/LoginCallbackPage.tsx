import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAdminLoggedIn } from '@/contexts/AuthContext'

export function LoginCallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setAdminLoggedIn()
    navigate('/', { replace: true })
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <p className="text-muted-foreground">Најавување...</p>
    </div>
  )
}
