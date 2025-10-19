export function usePdf() {
  const openPdf = () => {
    // Open the CV viewer page in a new tab
    const viewerUrl = `${window.location.origin}/cv`
    window.open(viewerUrl, '_blank', 'noopener,noreferrer')
  }

  return {
    openPdf
  }
}
