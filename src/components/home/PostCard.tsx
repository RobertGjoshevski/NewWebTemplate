import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import type { Post } from '@/types/post'

interface PostCardProps {
  post: Post
  showRemove?: boolean
  onRemove?: () => void
}

export function PostCard({ post, showRemove, onRemove }: PostCardProps) {
  return (
    <Card className="relative overflow-hidden">
      {showRemove && onRemove && (
        <Button
          type="button"
          variant="destructive"
          size="icon"
          className="absolute right-2 top-2 z-10 size-8 rounded-full"
          onClick={(e) => {
            e.preventDefault()
            onRemove()
          }}
          aria-label="Отстрани"
        >
          <X className="size-4" />
        </Button>
      )}
      <div className="aspect-video w-full bg-muted">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
            Без слика
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold leading-tight">{post.title}</h3>
        <p className="text-xs text-muted-foreground">{post.date}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.content}
        </p>
      </CardContent>
    </Card>
  )
}
