import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { usePosts } from '@/data/usePosts'

export function NewPostForm() {
  const { addPost } = usePosts()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [saved, setSaved] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImageUrl(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    addPost({
      title: title.trim(),
      date: new Date().toISOString().slice(0, 10),
      imageUrl: imageUrl || '',
      content: content.trim() || '',
    })
    setTitle('')
    setContent('')
    setImageUrl('')
    setSaved(true)
    if (fileInputRef.current) fileInputRef.current.value = ''
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <Card className="mb-8 border-primary/30">
      <CardHeader>
        <h3 className="font-semibold">Нова објава</h3>
        <p className="text-sm text-muted-foreground">
          Додајте слика и текст. За зачувување во репо користете{' '}
          <a href="/keystatic" className="underline hover:text-foreground">
            Keystatic админ
          </a>
          .
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Наслов</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Наслов на објавата"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Слика</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border-input h-9 w-full cursor-pointer rounded-md border bg-transparent px-3 py-1 text-sm file:border-0 file:bg-transparent"
            />
            {imageUrl && (
              <div className="mt-2 aspect-video w-full max-w-xs overflow-hidden rounded-md bg-muted">
                <img
                  src={imageUrl}
                  alt="Преглед"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Текст</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Опис на објавата..."
              rows={3}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <Button type="submit">Зачувај</Button>
          {saved && (
            <span className="ml-2 text-sm text-green-600">Зачувано.</span>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
