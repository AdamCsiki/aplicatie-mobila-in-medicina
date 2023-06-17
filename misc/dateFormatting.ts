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
