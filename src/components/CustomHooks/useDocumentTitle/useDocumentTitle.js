import { useEffect } from 'react'

export default function useDocumentTitle(counter) {
    useEffect(() => {
        document.title = `counter ${counter}`
    }, [counter])
}
