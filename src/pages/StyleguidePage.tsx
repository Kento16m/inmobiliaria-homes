import ColorPalette from '@/components/ui/ColorPalette'
import TypeScale from '@/components/ui/TypeScale'
import { strings } from '@/lib/strings'
import ButtonsShowcase from '@/pages/styleguide/ButtonsShowcase'
import DisplayShowcase from '@/pages/styleguide/DisplayShowcase'
import FormShowcase from '@/pages/styleguide/FormShowcase'
import StatsShowcase from '@/pages/styleguide/StatsShowcase'

export default function StyleguidePage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-6 p-8">
      <h1 className="text-h1 text-primary-500">{strings.styleguide.title}</h1>
      <ColorPalette />
      <TypeScale />
      <h2 className="mt-4 text-h2 text-gray-900">{strings.styleguide.components.title}</h2>
      <ButtonsShowcase />
      <DisplayShowcase />
      <FormShowcase />
      <StatsShowcase />
    </main>
  )
}
