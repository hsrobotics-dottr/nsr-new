import { IndustryLayout } from '@/components/industry-layout'
import { generateIndustryVideos, industryData } from '@/lib/industry-data'

export default function OtherIndustriesPage() {
  const data = industryData['diger']
  const videos = generateIndustryVideos('diger', 15)

  return (
    <IndustryLayout
      title={data.title}
      description={data.description}
      images={data.images}
      videos={videos}
    />
  )
}
