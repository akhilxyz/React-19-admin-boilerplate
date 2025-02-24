/**
 * @description copyTextToClipboard
 * @param text
 */
export function copyTextToClipboard(text: string): void {
  const textArea = document.createElement('textarea')
  textArea.value = text

  // textarea to DOM 
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea)

  textArea.select()
  document.execCommand('copy')

  document.body.removeChild(textArea)
}
