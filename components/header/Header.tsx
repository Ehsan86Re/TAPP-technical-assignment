export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex h-12 items-center mb-3">
        {children}
    </header>
  )
}
