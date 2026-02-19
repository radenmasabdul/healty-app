import PageContainer from "./PageContainer";

interface GlobalLoadingProps {
    children: React.ReactNode;
};

export default function GlobalLoading({ children }: GlobalLoadingProps) {
    return (
        <PageContainer>
            {children}
        </PageContainer>
    )
};