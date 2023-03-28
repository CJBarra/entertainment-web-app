import { Navbar } from "@/components";
import { ReactNode } from "react";
import styled from "styled-components/macro";

const DashboardLayout = styled.div`
  @media (min-width: 56.25rem) {
  }
`;

type DashboardProps = {
  children: ReactNode;
};
/* always visible */
export default function Dashboard({ children }: DashboardProps) {
  return (
    <DashboardLayout>
      <Navbar />

      {children}
    </DashboardLayout>
  );
}
