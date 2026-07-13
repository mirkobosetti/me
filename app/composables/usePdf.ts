/** Opens the CV PDF in a new tab. */
export function usePdf() {
  const openPdf = () => {
    if (import.meta.client) {
      window.open('/cv.pdf', '_blank', 'noopener,noreferrer')
    }
  }
  return { openPdf }
}
