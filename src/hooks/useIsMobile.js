import { useMedia } from "use-media"

const useIsMobile = () => {
  const breakpoint = 768

  const isMobile = useMedia({ maxWidth: breakpoint })

  return isMobile
}

export default useIsMobile
