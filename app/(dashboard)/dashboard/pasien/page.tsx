import PageContainer from "@/components/global/PageContainer";
import GlobalHeader from "@/components/global/GlobalHeader";
import CardContent from "@/components/global/CardContent";
import PasienList from "@/features/pasien/components/PasienList";

export default function page() {
  return (
    <PageContainer>
        <GlobalHeader title="Patient Management" description="Welcome to your Patient Management"/>

        <CardContent>
          <PasienList />
        </CardContent>
    </PageContainer>
  )
}