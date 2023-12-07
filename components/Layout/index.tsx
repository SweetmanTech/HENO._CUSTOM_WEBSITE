import BaseLayout from "./BaseLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type, entered = false }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container entered={entered}>{children}</Container>
}

export default Layout
