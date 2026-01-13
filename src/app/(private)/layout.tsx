import { MainLayout } from "@/components";
import PrivateLayoutProvider from "@/providers/PrivateLayoutProvider";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateLayoutProvider>
      <MainLayout>{children}</MainLayout>
    </PrivateLayoutProvider>
  );
};

export default PrivateLayout;
