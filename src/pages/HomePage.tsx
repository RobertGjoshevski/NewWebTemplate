import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-semibold">Welcome</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            High-performance, SEO-friendly static site. React + Vite + Tailwind +
            Shadcn + Keystatic.
          </p>
          <Button asChild>
            <a href="/keystatic">Open Keystatic Admin</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
