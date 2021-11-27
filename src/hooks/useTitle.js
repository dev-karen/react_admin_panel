import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | Ebay`;
  }, [title]);
}
export default useTitle;
