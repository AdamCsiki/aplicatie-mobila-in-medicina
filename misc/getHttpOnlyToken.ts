function getHttpOnlyToken(headers: string[]) {
    // ! slicing the entire header into a list
    // ! finding the specific value in the list with "HttpOnly" string in it
    // ! then saving it into the variable httpOnly
    let httpOnly = headers[0].split('; ').find((value) => {
        return value.startsWith('HttpOnly, ')
    })
    // ! slices the text and adds 8 to remove the "refresh="
    // ? searches the index of the 'refresh=' and with the "+ 8" removes it all together from the token
    return httpOnly?.slice(httpOnly?.search('refresh=') + 8)
}

export default getHttpOnlyToken
