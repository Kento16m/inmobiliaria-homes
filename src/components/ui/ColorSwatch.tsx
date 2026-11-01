interface ColorSwatchProps {
  token: string
  className: string
}

export default function ColorSwatch({ token, className }: ColorSwatchProps) {
  return (
    <div className="flex w-20 flex-col items-center gap-2">
      <div className={`size-12 rounded-pill border border-gray-100 ${className}`} />
      <span className="text-p4 text-gray-500">{token}</span>
    </div>
  )
}
