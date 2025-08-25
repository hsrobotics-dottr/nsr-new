import { IndustryLayout } from '@/components/industry-layout';
import { generateIndustryVideos, industryData } from '@/lib/industry-data';

export default function ThreeCEndustryPage() {
  const data = industryData['3c'];
  const videos = generateIndustryVideos('3c', 15);

  return (
    <IndustryLayout
      title={data.title}
      description={data.description}
      images={data.images}
      videos={videos}
    />
  );
}
