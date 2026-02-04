import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { usePosts } from '@/data/usePosts'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { PostCard } from './PostCard'
import { NewPostForm } from './NewPostForm'

export function GallerySection() {
  const { isAdmin } = useAuth()
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const { posts, removePost, isLocalPost } = usePosts()

  return (
    <section id="галерија" className="scroll-mt-14 py-12 md:py-16">
      <div className="page-container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Галерија</h2>
            <p className="mt-1 text-muted-foreground">
              Нашите проекти и завршени објекти
            </p>
          </div>
          {isAdmin && (
            <Button
              type="button"
              variant={showNewPostForm ? 'secondary' : 'default'}
              size="sm"
              onClick={() => setShowNewPostForm((v) => !v)}
              aria-label={showNewPostForm ? 'Затвори форма' : 'Нова објава'}
            >
              <Plus className="size-4" />
              {showNewPostForm ? 'Затвори' : 'Нова објава'}
            </Button>
          )}
        </div>
        {isAdmin && showNewPostForm && <NewPostForm />}
        {posts.length === 0 ? (
          <p className="mt-8 text-center text-muted-foreground">
            Нема објави за сега. Додадете објави преку админ панелот.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                showRemove={isAdmin && isLocalPost(post.id)}
                onRemove={
                  isAdmin && isLocalPost(post.id)
                    ? () => removePost(post.id)
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
