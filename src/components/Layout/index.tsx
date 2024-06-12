import LoadingPage from "@/components/LoadingPage"
import ContactProvider from "@/providers/ContactProvider"
import { usePageLoad } from "@/providers/PageLoadProvider"
import EmployeeProvider from "@/providers/EmployeeProvider"
import BaseLayout from "./BaseLayout"
import MobileLayout from "./MobileLayout"
import { ILayout } from "./types"
import FullLayout from "./FullLayout"

const layoutContainers = {
  base: BaseLayout,
  mobile: MobileLayout,
  full: FullLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]
  const { entered } = usePageLoad()

  return (
    <ContactProvider>
      <EmployeeProvider>
        {entered ? <Container>{children}</Container> : <LoadingPage />}
      </EmployeeProvider>
    </ContactProvider>
  )
}

export default Layout
