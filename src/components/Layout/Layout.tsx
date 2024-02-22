import * as styled from "./Layout.style";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <styled.Container>{children}</styled.Container>;
};

export default Layout;
