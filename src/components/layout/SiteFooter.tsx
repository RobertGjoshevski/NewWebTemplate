import { Mail, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="page-container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Контакт</h3>
            <p className="text-sm text-muted-foreground">
              Студио за градежништво и дизајн
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Контактирајте не</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                <span>ул. Пример 1, 1000 Скопје, Македонија</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a href="tel:+38970123456" className="hover:text-foreground">
                  +389 70 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a
                  href="mailto:info@artistic-design.mk"
                  className="hover:text-foreground"
                >
                  info@artistic-design.mk
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Работно време</h3>
            <p className="text-sm text-muted-foreground">
              Пон – Пет: 08:00 – 17:00
              <br />
              Сабота: по договор
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Артистик Дизајн. Сите права задржани.
        </div>
      </div>
    </footer>
  )
}
