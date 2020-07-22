
interface RequestEvent extends ProgressEvent<EventTarget> {}

interface SuccesfullResponse {
    status: number
    statusText: string
    response: any
}

export interface header {
    name: string
    value: string
}

interface param {
    name: string
    value: string
}

interface requestOptions {
    url: string | Url
    responseType: 'text' | 'blob' | 'arraybuffer' | 'document' | 'json'
    error: (error: RequestEvent) => void
    success: (response: SuccesfullResponse) => void
    crosssite?: boolean
    sendCookies?: boolean
    headers?: header[]
}

export interface postOptions extends requestOptions {
    data?: any
    form?: HTMLFormElement
    uploaderror?: (event: RequestEvent) => void
    uploadstart?: (event: RequestEvent) => void
    uploadprogress?: (uploaded: number, total: number) => void
    uploadend?: (event: RequestEvent) => void
}

export interface getOptions extends requestOptions {
    downloadprogress?: (contentLengthAvailble: boolean, downloaded: number, total?: number) => void
    params?: param[]
}