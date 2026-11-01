import { useState } from 'react'
import Input from '@/components/ui/Input'
import Pagination from '@/components/ui/Pagination'
import Select from '@/components/ui/Select'
import Tabs from '@/components/ui/Tabs'
import ShowcaseSection from '@/pages/styleguide/ShowcaseSection'
import { strings } from '@/lib/strings'

const typeItems = [
  { value: 'apartment', label: strings.propertyTypes.apartment },
  { value: 'land', label: strings.propertyTypes.land },
  { value: 'manufactured', label: strings.propertyTypes.manufactured },
  { value: 'multifamily', label: strings.propertyTypes.multifamily },
]

export default function FormShowcase() {
  const { components } = strings.styleguide
  const [tab, setTab] = useState('apartment')
  const [page, setPage] = useState(1)

  return (
    <>
      <ShowcaseSection title={components.form}>
        <Input label={components.inputLabel} placeholder={components.inputPlaceholder} />
        <Input
          label={components.inputError}
          defaultValue=""
          error={components.inputErrorMessage}
        />
        <Input label={components.disabled} disabled placeholder={components.inputPlaceholder} />
        <Select label={components.selectLabel} options={typeItems} />
      </ShowcaseSection>

      <ShowcaseSection title={components.tabs}>
        <Tabs items={typeItems} value={tab} onChange={setTab} />
      </ShowcaseSection>

      <ShowcaseSection title={components.pagination}>
        <div className="w-full">
          <Pagination page={page} total={12} pageSize={9} onPageChange={setPage} />
        </div>
      </ShowcaseSection>
    </>
  )
}
