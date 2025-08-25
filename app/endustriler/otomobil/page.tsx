import { IndustryLayout } from '@/components/industry-layout';
import { generateIndustryVideos, industryData } from '@/lib/industry-data';

export default function AutomotiveIndustryPage() {
  const data = industryData['otomobil'];
  const videos = generateIndustryVideos('otomobil', 15);

  return (
    <IndustryLayout
      title={data.title}
      description={data.description}
      images={data.images}
      videos={videos}
    />
  );
}
