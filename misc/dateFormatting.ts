// ! FORMATTING THE DATE TO BE USED FOR STORAGE
export const getCurrentDate = () => {
    let currentDate = new Date()

    return currentDate
        .toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
        .replace(/\//g, '')
}

export const getFormattedDate = (date: Date) => {
    return new Date(date)
        .toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
        .replace(/\//g, '')
}

export const getFormattedDateBeautify = (date: Date) => {
    let day = String(date.getDate()).padStart(2, '0')
    let month = String(date.getMonth() + 1).padStart(2, '0')
    let year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export const getNextDay = (currentDay: Date) => {
    let nextDay = new Date(currentDay)
    nextDay.setDate(currentDay.getDate() + 1)
    return nextDay
}

export const getPrevDay = (currentDay: Date) => {
    let prevDay = new Date(currentDay)
    prevDay.setDate(currentDay.getDate() - 1)
    return prevDay
}

export function isTomorrow(selectedDate: Date) {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    return (
        selectedDate.getDate() === tomorrow.getDate() &&
        selectedDate.getMonth() === tomorrow.getMonth() &&
        selectedDate.getFullYear() === tomorrow.getFullYear()
    )
}
