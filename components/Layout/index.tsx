import ContactProvider from "../../providers/ContactProvider"
import BaseLayout from "./BaseLayout"
import MobileLayout from "./MobileLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
  mobile: MobileLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return (
    <ContactProvider>
      <Container>{children}</Container>
    </ContactProvider>
  )
}

export default Layout
