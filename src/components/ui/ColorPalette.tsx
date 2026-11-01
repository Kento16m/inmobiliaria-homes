import ColorSwatch from '@/components/ui/ColorSwatch'
import { colorGroups } from '@/data/styleguide'
import { strings } from '@/lib/strings'

export default function ColorPalette() {
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="mb-6 text-h4 text-gray-900">{strings.styleguide.colors}</h2>
      <div className="flex flex-col gap-6">
        {colorGroups.map((group) => (
          <div key={group.key}>
            <h3 className="mb-3 text-p3 font-medium uppercase tracking-widest text-gray-400">
              {strings.styleguide.groups[group.key]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.swatches.map((swatch) => (
                <ColorSwatch key={swatch.token} {...swatch} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
