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

function Layout({ children, type, entered = false }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container entered={entered}>{children}</Container>
}

export default Layout
