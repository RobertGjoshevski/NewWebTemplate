import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function KeystaticAdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-muted/30">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <h1 className="text-2xl font-semibold">Админ – Keystatic</h1>
          <p className="text-sm text-muted-foreground">
            За додавање објави директно на страницата (слика + текст) со можност
            за зачувување во прегледувач, користете го линкот подолу.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild>
            <Link to="/?admin=1#галерија">Додај објава на страница</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            За зачувување на содржината во репо (Git), покренете{' '}
            <code className="rounded bg-muted px-1">npx keystatic dev</code> во
            проектот или користете Keystatic со Remix/Next.js/Astro.
          </p>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://keystatic.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keystatic документација
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/">Назад на страница</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
