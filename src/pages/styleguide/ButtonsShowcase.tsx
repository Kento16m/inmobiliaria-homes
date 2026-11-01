import { Plus, SlidersHorizontal } from 'lucide-react'
import Button, { type ButtonVariant } from '@/components/ui/Button'
import ShowcaseSection from '@/pages/styleguide/ShowcaseSection'
import { strings } from '@/lib/strings'

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost']
const labels: Record<ButtonVariant, string> = {
  primary: strings.actions.addProperty,
  secondary: strings.actions.generateEmail,
  outline: strings.actions.brochure,
  ghost: strings.actions.cancel,
}

export default function ButtonsShowcase() {
  const { components } = strings.styleguide

  return (
    <ShowcaseSection title={components.buttons}>
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col items-start gap-3">
          <Button variant={variant} icon={variant === 'primary' ? <Plus className="size-4" /> : null}>
            {labels[variant]}
          </Button>
          <Button variant={variant} size="sm">
            {components.small}
          </Button>
          <Button variant={variant} disabled>
            {components.disabled}
          </Button>
        </div>
      ))}
      <Button variant="outline" icon={<SlidersHorizontal className="size-4" />}>
        {strings.actions.filters}
      </Button>
      <Button>{strings.actions.save}</Button>
    </ShowcaseSection>
  )
}
