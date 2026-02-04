import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'

export function SiteHeader() {
  const { isAdmin, logout } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="page-container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="text-lg">Артистик Дизајн</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Почетна
          </Link>
          <Link
            to="/#галерија"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Галерија
          </Link>
          {isAdmin ? (
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              Админ одјава
            </Button>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Админ</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
