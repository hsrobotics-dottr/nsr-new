import { IndustryLayout } from '@/components/industry-layout';
import { generateIndustryVideos, industryData } from '@/lib/industry-data';

export default function ClothingShoeIndustryPage() {
  const data = industryData['ayakkabi-giyim'];
  const videos = generateIndustryVideos('ayakkabi-giyim', 15);

  return (
    <IndustryLayout
      title={data.title}
      description={data.description}
      images={data.images}
      videos={videos}
    />
  );
}
