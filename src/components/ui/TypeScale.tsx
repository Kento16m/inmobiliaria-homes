import { typeScale } from '@/data/styleguide'
import { strings } from '@/lib/strings'

export default function TypeScale() {
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="mb-6 text-h4 text-gray-900">{strings.styleguide.typography}</h2>
      <div className="flex flex-col gap-4">
        {typeScale.map((item) => (
          <div key={item.name} className="flex items-baseline gap-6">
            <span className="w-10 text-p2 font-semibold text-gray-700">{item.name}</span>
            <span className="w-16 text-p2 text-gray-400">
              {item.size} / {item.lineHeight}
            </span>
            <span className={`${item.className} text-gray-900`}>{strings.styleguide.sample}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
