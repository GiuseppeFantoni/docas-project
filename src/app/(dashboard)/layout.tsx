import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import * as React from "react";
import Copyright from "../components/Copyright";

export default function Layout(props: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <DashboardLayout>
      <PageContainer>
        {props.children}
        <Copyright sx={{ my: 4 }} />
      </PageContainer>
    </DashboardLayout>
  );
}
