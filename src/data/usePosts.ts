import { useMemo, useCallback, useState, useEffect } from 'react'
import type { Post } from '@/types/post'
import staticPostsJson from '@/data/posts.json'

const STORAGE_KEY = 'artistic-design-posts'

const staticPosts = staticPostsJson as Post[]

function getLocalPosts(): Post[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as Post[]
  } catch {
    return []
  }
}

export function usePosts() {
  const [localPosts, setLocalPosts] = useState<Post[]>([])

  useEffect(() => {
    setLocalPosts(getLocalPosts())
    const handleStorage = () => setLocalPosts(getLocalPosts())
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const posts = useMemo(
    () =>
      [...staticPosts, ...localPosts].sort((a, b) =>
        b.date.localeCompare(a.date)
      ),
    [localPosts]
  )

  const addPost = useCallback((post: Omit<Post, 'id'>) => {
    const id = `local-${Date.now()}`
    const newPost: Post = { ...post, id }
    const current = getLocalPosts()
    const next = [...current, newPost]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setLocalPosts(next)
  }, [])

  const removePost = useCallback((id: string) => {
    if (!id.startsWith('local-')) return
    const current = getLocalPosts()
    const next = current.filter((p) => p.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setLocalPosts(next)
  }, [])

  const isLocalPost = useCallback((id: string) => id.startsWith('local-'), [])

  return { posts, addPost, removePost, isLocalPost }
}
