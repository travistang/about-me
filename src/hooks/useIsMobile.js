import { useMedia } from "use-media"

const useIsMobile = () => {
  const breakpoint = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--mobile-breakpoint")

  const isMobile = useMedia({ maxWidth: breakpoint })

  return isMobile
}

export default useIsMobile
