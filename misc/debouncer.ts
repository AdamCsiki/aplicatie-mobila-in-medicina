type Func<T extends any[], R> = (...args: T) => R

// ! The debounce function will delay the execution of a function
// ? Returns a debounced version of the provided function
// ? Requires a function and a delay
function debounce<T extends Func<any[], any>>(func: T, delay: number) {
    let timeout: ReturnType<typeof setTimeout> | null
    let resolve: Func<any[], void> | null
    let reject: Func<any[], void> | null

    return function (this: any, ...args: Parameters<T>) {
        if (timeout) {
            clearTimeout(timeout)
        }

        return new Promise<ReturnType<T>>((promiseResolve, promiseReject) => {
            resolve = promiseResolve
            reject = promiseReject

            timeout = setTimeout(async () => {
                try {
                    const result = await func.apply(this, args)
                    resolve && resolve(result)
                } catch (err) {
                    reject && reject(err)
                } finally {
                    timeout = null
                    resolve = null
                    reject = null
                }
            }, delay)
        })
    }
}

export default debounce
