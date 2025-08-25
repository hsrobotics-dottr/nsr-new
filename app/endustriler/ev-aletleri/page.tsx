import { IndustryLayout } from '@/components/industry-layout';
import { generateIndustryVideos, industryData } from '@/lib/industry-data';

export default function HomeAppliancesIndustryPage() {
  const data = industryData['ev-aletleri'];
  const videos = generateIndustryVideos('ev-aletleri', 15);

  return (
    <IndustryLayout
      title={data.title}
      description={data.description}
      images={data.images}
      videos={videos}
    />
  );
}
