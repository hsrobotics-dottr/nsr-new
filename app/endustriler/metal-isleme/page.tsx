import { IndustryLayout } from '@/components/industry-layout'
import { generateIndustryVideos, industryData } from '@/lib/industry-data'

export default function MetalProcessingIndustryPage() {
  const data = industryData['metal-isleme']
  const videos = generateIndustryVideos('metal-isleme', 15)

  return (
    <IndustryLayout
      title={data.title}
      description={data.description}
      images={data.images}
      videos={videos}
    />
  )
}
