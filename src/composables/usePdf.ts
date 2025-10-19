export function usePdf() {
  const openPdf = () => {
    // Use the full absolute URL to bypass Vue Router completely
    const fullUrl = `${window.location.origin}/cv.pdf`
    window.open(fullUrl, '_blank', 'noopener,noreferrer')
  }

  return {
    openPdf
  }
}
