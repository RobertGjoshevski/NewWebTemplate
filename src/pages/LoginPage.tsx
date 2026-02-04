import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { setAdminLoggedIn } from '@/contexts/AuthContext'

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID as
  | string
  | undefined

function getCallbackUrl(): string {
  const base = window.location.origin + import.meta.env.BASE_URL
  return base.replace(/\/$/, '') + '/login/callback'
}

export function LoginPage() {
  const navigate = useNavigate()

  const handleGitHubLogin = () => {
    if (!GITHUB_CLIENT_ID) {
      alert(
        'GitHub OAuth не е конфигуриран. Поставете VITE_GITHUB_CLIENT_ID во .env и креирајте GitHub OAuth App со Authorization callback URL: ' +
        getCallbackUrl()
      )
      return
    }
    const redirectUri = getCallbackUrl()
    const url = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(GITHUB_CLIENT_ID)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:user`
    window.location.href = url
  }

  const handleDevAdmin = () => {
    setAdminLoggedIn()
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-semibold">Админ најава</h1>
          <p className="text-sm text-muted-foreground">
            Само за администраторот на страницата. Најавете се со GitHub за да
            додавате и отстранувате објави во галеријата. Нема кориснички сметки
            за посетители.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            type="button"
            className="w-full"
            onClick={handleGitHubLogin}
          >
            Најава со GitHub (админ)
          </Button>
          {!GITHUB_CLIENT_ID && (
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleDevAdmin}
            >
              Продолжи како админ (без GitHub)
            </Button>
          )}
          <Button asChild variant="ghost" size="sm" className="w-full">
            <Link to="/">Назад</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
