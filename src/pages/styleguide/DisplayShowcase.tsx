import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import ShowcaseSection from '@/pages/styleguide/ShowcaseSection'
import { currentUser } from '@/data/currentUser'
import { strings } from '@/lib/strings'

export default function DisplayShowcase() {
  const { components } = strings.styleguide

  return (
    <>
      <ShowcaseSection title={components.badges}>
        <Badge variant="for-sale">{strings.listingStatus.forSale}</Badge>
        <Badge variant="green">{strings.listingStatus.forRent}</Badge>
        <Badge variant="green">{components.statusWon}</Badge>
        <Badge variant="red">{components.statusLost}</Badge>
        <Badge variant="yellow">{components.statusAssigned}</Badge>
        <Badge variant="gray">{components.statusDraft}</Badge>
      </ShowcaseSection>

      <ShowcaseSection title={components.card}>
        <Card className="max-w-sm">
          <p className="text-p2 text-gray-700">{components.cardText}</p>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title={components.avatar}>
        <Avatar name={currentUser.name} size="sm" />
        <Avatar name={currentUser.name} size="md" />
        <Avatar name={currentUser.name} size="lg" />
      </ShowcaseSection>
    </>
  )
}
