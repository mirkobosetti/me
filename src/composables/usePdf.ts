export function usePdf() {
  const openPdf = async () => {
    try {
      // Fetch the PDF file directly (bypasses Vue Router)
      const response = await fetch('/cv.pdf')
      const blob = await response.blob()

      // Create a URL for the blob
      const url = URL.createObjectURL(blob)

      // Open in new tab
      window.open(url, '_blank', 'noopener,noreferrer')

      // Clean up the URL after a delay
      setTimeout(() => URL.revokeObjectURL(url), 100)
    } catch (error) {
      console.error('Failed to open PDF:', error)
    }
  }

  return {
    openPdf
  }
}
