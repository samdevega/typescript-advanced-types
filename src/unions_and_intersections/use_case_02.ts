(() => {
// Enum alternative
type Status = 'error' | 'loading' | 'success'

function setStatus(status: Status): void {}

setStatus('') // Check autocomplete

})()