import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/**
 * Keystatic Admin is configured at /keystatic.
 * The full Admin UI (makePage) is provided by framework adapters (Remix, Next.js, Astro).
 * For Vite + React Router, configure storage in keystatic.config.ts and use the Reader API
 * for content. To use the full admin UI, consider Remix + Vite or run Keystatic CLI.
 */
export function KeystaticAdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-muted/30">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <h1 className="text-2xl font-semibold">Keystatic Admin</h1>
          <p className="text-sm text-muted-foreground">
            Admin is available at <code className="rounded bg-muted px-1">/keystatic</code>
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Content schema is defined in <code className="rounded bg-muted px-1">keystatic.config.ts</code>.
            Posts are stored under <code className="rounded bg-muted px-1">src/content/posts/</code>.
            Update <code className="rounded bg-muted px-1">storage.repo</code> to your GitHub repo for
            the full admin UI with Remix, Next.js, or Astro.
          </p>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a
                href="https://keystatic.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Keystatic Docs
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="/">Back to site</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
